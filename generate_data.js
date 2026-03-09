const fs = require('fs');
const path = require('path');

// Years: 2021-2033
const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];

// Geographies with their region grouping
const regions = {
  "North America": ["U.S.", "Canada"],
  "Europe": ["U.K.", "Germany", "Italy", "France", "Spain", "Russia", "Rest of Europe"],
  "Asia Pacific": ["China", "India", "Japan", "South Korea", "ASEAN", "Australia", "Rest of Asia Pacific"],
  "Latin America": ["Brazil", "Argentina", "Mexico", "Rest of Latin America"],
  "Middle East & Africa": ["GCC", "South Africa", "Rest of Middle East & Africa"]
};

// New segment definitions with market share splits (proportions within each segment type)
const segmentTypes = {
  "By Product Category": {
    "Vitamins (single & multivitamins)": 0.12,
    "Minerals": 0.08,
    "Amino acids & protein supplements": 0.09,
    "Omega fatty acids": 0.06,
    "Protein powders and concentrates": 0.10,
    "Energy and endurance supplements": 0.07,
    "Recovery supplements": 0.05,
    "Herbal extracts": 0.07,
    "Ayurveda-inspired Nutraceuticals formulations": 0.06,
    "Plant-based wellness supplements": 0.05,
    "Nutrient-enriched foods": 0.06,
    "Fortified beverages": 0.05,
    "Nutritional meal replacements": 0.04,
    "Probiotics": 0.04,
    "Collagen peptides": 0.03,
    "Enzymes": 0.015,
    "Specialty bioactive compounds": 0.015
  },
  "By Dosage Form": {
    "Tablets": 0.30,
    "Capsules": 0.25,
    "Powders": 0.22,
    "Liquids / Shots": 0.13,
    "Gummies & Chewables": 0.10
  },
  "By Consumer Application": {
    "Immunity & Preventive Health": 0.28,
    "Sports & Fitness Nutrition": 0.24,
    "Digestive Health & Probiotics": 0.20,
    "Bone & Joint Health": 0.16,
    "Cognitive & Mental Wellness": 0.12
  },
  "By Distribution Channel": {
    "Pharmacies & Drugstores": 0.28,
    "Supermarkets / Hypermarkets": 0.22,
    "Health & Nutrition Specialty Stores": 0.18,
    "E-commerce Platforms": 0.20,
    "Direct Sales / Wellness Networks": 0.12
  }
};

// Regional base values (USD Million) for 2021 - total market per region
// Global Nutraceuticals market ~$380B in 2021, growing ~8% CAGR
const regionBaseValues = {
  "North America": 130000,
  "Europe": 95000,
  "Asia Pacific": 105000,
  "Latin America": 30000,
  "Middle East & Africa": 20000
};

// Country share within region (must sum to ~1.0)
const countryShares = {
  "North America": { "U.S.": 0.82, "Canada": 0.18 },
  "Europe": { "U.K.": 0.18, "Germany": 0.22, "Italy": 0.12, "France": 0.16, "Spain": 0.10, "Russia": 0.08, "Rest of Europe": 0.14 },
  "Asia Pacific": { "China": 0.28, "India": 0.12, "Japan": 0.25, "South Korea": 0.12, "ASEAN": 0.10, "Australia": 0.07, "Rest of Asia Pacific": 0.06 },
  "Latin America": { "Brazil": 0.45, "Argentina": 0.15, "Mexico": 0.25, "Rest of Latin America": 0.15 },
  "Middle East & Africa": { "GCC": 0.45, "South Africa": 0.25, "Rest of Middle East & Africa": 0.30 }
};

// Growth rates (CAGR) per region - slightly different for variety
const regionGrowthRates = {
  "North America": 0.072,
  "Europe": 0.068,
  "Asia Pacific": 0.098,
  "Latin America": 0.085,
  "Middle East & Africa": 0.078
};

// Segment-specific growth multipliers (relative to regional base CAGR)
const segmentGrowthMultipliers = {
  "By Product Category": {
    "Vitamins (single & multivitamins)": 0.95,
    "Minerals": 0.90,
    "Amino acids & protein supplements": 1.08,
    "Omega fatty acids": 0.92,
    "Protein powders and concentrates": 1.15,
    "Energy and endurance supplements": 1.12,
    "Recovery supplements": 1.10,
    "Herbal extracts": 1.05,
    "Ayurveda-inspired Nutraceuticals formulations": 1.20,
    "Plant-based wellness supplements": 1.18,
    "Nutrient-enriched foods": 1.02,
    "Fortified beverages": 1.08,
    "Nutritional meal replacements": 1.06,
    "Probiotics": 1.22,
    "Collagen peptides": 1.25,
    "Enzymes": 1.05,
    "Specialty bioactive compounds": 1.15
  },
  "By Dosage Form": {
    "Tablets": 0.88,
    "Capsules": 0.95,
    "Powders": 1.10,
    "Liquids / Shots": 1.08,
    "Gummies & Chewables": 1.25
  },
  "By Consumer Application": {
    "Immunity & Preventive Health": 1.12,
    "Sports & Fitness Nutrition": 1.08,
    "Digestive Health & Probiotics": 1.15,
    "Bone & Joint Health": 0.95,
    "Cognitive & Mental Wellness": 1.18
  },
  "By Distribution Channel": {
    "Pharmacies & Drugstores": 0.92,
    "Supermarkets / Hypermarkets": 0.95,
    "Health & Nutrition Specialty Stores": 1.05,
    "E-commerce Platforms": 1.25,
    "Direct Sales / Wellness Networks": 1.08
  }
};

// Hierarchy for "By Product Category" - maps parent to leaf segments
const productCategoryHierarchy = {
  "Dietary Supplements": [
    "Vitamins (single & multivitamins)",
    "Minerals",
    "Amino acids & protein supplements",
    "Omega fatty acids"
  ],
  "Sports Nutrition Products": [
    "Protein powders and concentrates",
    "Energy and endurance supplements",
    "Recovery supplements"
  ],
  "Herbal & Botanical Supplements": [
    "Herbal extracts",
    "Ayurveda-inspired Nutraceuticals formulations",
    "Plant-based wellness supplements"
  ],
  "Functional Foods & Fortified Nutrition": [
    "Nutrient-enriched foods",
    "Fortified beverages",
    "Nutritional meal replacements"
  ],
  "Specialty Nutraceuticals Ingredients": [
    "Probiotics",
    "Collagen peptides",
    "Enzymes",
    "Specialty bioactive compounds"
  ]
};

// Volume multiplier: units per USD Million (rough: ~15000 units per $1M for nutraceuticals)
const volumePerMillionUSD = 15000;

// Seeded pseudo-random for reproducibility
let seed = 42;
function seededRandom() {
  seed = (seed * 16807 + 0) % 2147483647;
  return (seed - 1) / 2147483646;
}

function addNoise(value, noiseLevel = 0.03) {
  return value * (1 + (seededRandom() - 0.5) * 2 * noiseLevel);
}

function roundTo1(val) {
  return Math.round(val * 10) / 10;
}

function roundToInt(val) {
  return Math.round(val);
}

function generateTimeSeries(baseValue, growthRate, roundFn) {
  const series = {};
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    const rawValue = baseValue * Math.pow(1 + growthRate, i);
    series[year] = roundFn(addNoise(rawValue));
  }
  return series;
}

function generateData(isVolume) {
  const data = {};
  const roundFn = isVolume ? roundToInt : roundTo1;
  const multiplier = isVolume ? volumePerMillionUSD : 1;

  // Generate data for each region and country
  for (const [regionName, countries] of Object.entries(regions)) {
    const regionBase = regionBaseValues[regionName] * multiplier;
    const regionGrowth = regionGrowthRates[regionName];

    // Region-level data
    data[regionName] = {};
    for (const [segType, segments] of Object.entries(segmentTypes)) {
      data[regionName][segType] = {};

      // Generate leaf-level time series first
      const leafData = {};
      for (const [segName, share] of Object.entries(segments)) {
        const segGrowth = regionGrowth * segmentGrowthMultipliers[segType][segName];
        const segBase = regionBase * share;
        leafData[segName] = generateTimeSeries(segBase, segGrowth, roundFn);
      }

      // For "By Product Category", nest under parent categories with aggregation
      if (segType === "By Product Category") {
        for (const [parentName, children] of Object.entries(productCategoryHierarchy)) {
          const parentNode = { _aggregated: true };
          // Sum children for parent aggregation
          for (const year of years) {
            parentNode[year] = roundFn(children.reduce((sum, child) => sum + (leafData[child][year] || 0), 0));
          }
          // Add children as nested entries
          for (const child of children) {
            parentNode[child] = leafData[child];
          }
          data[regionName][segType][parentName] = parentNode;
        }
      } else {
        // Flat segments
        for (const [segName, series] of Object.entries(leafData)) {
          data[regionName][segType][segName] = series;
        }
      }
    }

    // Add "By Country" for each region
    data[regionName]["By Country"] = {};
    for (const country of countries) {
      const cShare = countryShares[regionName][country];
      // Use a slight variation of region growth per country
      const countryGrowthVariation = 1 + (seededRandom() - 0.5) * 0.06;
      const countryBase = regionBase * cShare;
      const countryGrowth = regionGrowth * countryGrowthVariation;
      data[regionName]["By Country"][country] = generateTimeSeries(countryBase, countryGrowth, roundFn);
    }

    // Country-level data
    for (const country of countries) {
      const cShare = countryShares[regionName][country];
      const countryBase = regionBase * cShare;
      const countryGrowthVariation = 1 + (seededRandom() - 0.5) * 0.04;
      const countryGrowth = regionGrowth * countryGrowthVariation;

      data[country] = {};
      for (const [segType, segments] of Object.entries(segmentTypes)) {
        data[country][segType] = {};

        // Generate leaf-level time series first
        const leafData = {};
        for (const [segName, share] of Object.entries(segments)) {
          const segGrowth = countryGrowth * segmentGrowthMultipliers[segType][segName];
          const segBase = countryBase * share;
          const shareVariation = 1 + (seededRandom() - 0.5) * 0.1;
          leafData[segName] = generateTimeSeries(segBase * shareVariation, segGrowth, roundFn);
        }

        // For "By Product Category", nest under parent categories with aggregation
        if (segType === "By Product Category") {
          for (const [parentName, children] of Object.entries(productCategoryHierarchy)) {
            const parentNode = { _aggregated: true };
            for (const year of years) {
              parentNode[year] = roundFn(children.reduce((sum, child) => sum + (leafData[child][year] || 0), 0));
            }
            for (const child of children) {
              parentNode[child] = leafData[child];
            }
            data[country][segType][parentName] = parentNode;
          }
        } else {
          for (const [segName, series] of Object.entries(leafData)) {
            data[country][segType][segName] = series;
          }
        }
      }
    }
  }

  return data;
}

// Generate both datasets
seed = 42;
const valueData = generateData(false);
seed = 7777;
const volumeData = generateData(true);

// Write files
const outDir = path.join(__dirname, 'public', 'data');
fs.writeFileSync(path.join(outDir, 'value.json'), JSON.stringify(valueData, null, 2));
fs.writeFileSync(path.join(outDir, 'volume.json'), JSON.stringify(volumeData, null, 2));

console.log('Generated value.json and volume.json successfully');
console.log('Value geographies:', Object.keys(valueData).length);
console.log('Volume geographies:', Object.keys(volumeData).length);
console.log('Segment types:', Object.keys(valueData['North America']));
console.log('Sample - North America, By Product Category:', JSON.stringify(valueData['North America']['By Product Category'], null, 2));
