'use client'

import { useState } from 'react'
import { Search, Download } from 'lucide-react'

interface DistributorData {
  id: number
  name: string
  yearEstablished: string
  headquarters: string
  keyRegions: string
  businessModel: string
  coreBusinessSegments: string
  keyContactPerson: string
  designation: string
  email: string
  phone: string
  linkedIn: string
  website: string
  productCategoriesHandled: string
  brandsDistributed: string
  productSpecialization: string
  therapeuticFocusAreas: string
  geographicCoverage: string
  targetCustomerSegments: string
  distributionChannels: string
  alignmentWithPortfolio: string
  marketEntryPotential: string
  partnershipSuitability: string
}

const sampleData: DistributorData[] = [
  {
    id: 1,
    name: 'KeHE Distributors LLC',
    yearEstablished: '1952',
    headquarters: 'Naperville, Illinois, USA',
    keyRegions: 'All 50 U.S. states + Puerto Rico; select distribution into Canada. Operates 18 regional distribution centres across the continental USA, enabling next-day delivery to most major markets.',
    businessModel: 'Pure-play wholesale distributor / wholesaler. KeHE does not manufacture products; it operates exclusively as a B2B intermediary between suppliers/brands and retail trade buyers.',
    coreBusinessSegments: 'Dietary supplements & nutraceuticals (primary); natural & organic specialty foods; health & beauty products; refrigerated & frozen natural products.',
    keyContactPerson: 'Darin Bhatt',
    designation: 'President & Chief Executive Officer',
    email: 'XX | kehe.com/become-a-vendor',
    phone: 'XXXXXXXXXX',
    linkedIn: 'linkedin.com/company/kehe-distributors',
    website: 'kehe.com',
    productCategoriesHandled: 'Vitamins & minerals; herbal & botanical supplements; sports nutrition (protein, BCAAs, pre-workout); probiotics & digestive health; Omega-3 & essential fatty acids; weight management; beauty nutrition; organic specialty supplements; functional foods & beverages.',
    brandsDistributed: 'Garden of Life; Nordic Naturals; New Chapter; Nature\u2019s Way; Solgar (NBTY); Ancient Nutrition; MegaFood; Host Defense; Gaia Herbs; Garden Protein; Nutiva; Manitoba Harvest. (KeHE distributes 5,000+ natural, organic and specialty brands nationally.)',
    productSpecialization: 'Full-spectrum natural & organic supplement distribution. Strong expertise in clean-label, non-GMO, USDA Organic certified, and NSF/Informed-Sport certified supplement categories. Deep capability in ambient and refrigerated supplement logistics.',
    therapeuticFocusAreas: 'Immunity & antioxidants; digestive health & gut microbiome; sports & active nutrition; women\u2019s health (prenatal, hormonal balance); children\u2019s nutrition; heart & cardiovascular health; cognitive wellness; sleep & stress.',
    geographicCoverage: 'United States (nationwide \u2013 all 50 states); Puerto Rico; limited Canadian distribution through partner network. Key metro hubs: Chicago, Los Angeles, Dallas, New York, Atlanta, Seattle.',
    targetCustomerSegments: 'Natural / specialty grocery retailers (Whole Foods Market, Sprouts Farmers Market, Fresh Market); independent natural food retailers; conventional grocery chains (Kroger, Albertsons, Publix); drug retailers (Walgreens, CVS); club stores; e-commerce platforms (Amazon.com, Thrive Market).',
    distributionChannels: 'B2B wholesale distribution centre (DC) to retail (primary channel); Direct-Store-Delivery (DSD) for select categories; E-commerce drop-ship fulfilment support; Foodservice distribution. EDI-enabled ordering for all retail partners.',
    alignmentWithPortfolio: 'STRONG ALIGNMENT.\nKeHE actively sources from cGMP and USFDA-inspected manufacturing facilities globally, including India. Categories directly matching Kausikh\u2019s Nutraceuticals output: vitamins & minerals, herbal/botanical supplements, sports nutrition proteins, and functional health products. FideFIT brand positioning (clean-label, wellness-focused) is well-suited to KeHE\u2019s natural & organic channel.',
    marketEntryPotential: 'HIGH.\nKeHE\u2019s national distribution infrastructure (18 DCs, 30,000+ retail touchpoints) offers Kausikh an immediate pathway to scale a new brand across the US. KeHE\u2019s category managers actively evaluate new supplier and brand opportunities quarterly. Private-label supply is also a strong initial engagement model.',
    partnershipSuitability: 'HIGH.\nPrerequisites: USFDA facility registration, cGMP certification (21 CFR Part 111), and compliance with DSHEA labelling. KeHE has established onboarding processes for Indian nutraceutical manufacturers. Competitive pricing vs. US and EU suppliers is critical. Recommend initiating via KeHE\u2019s Supplier Portal and requesting a category manager meeting at Natural Products Expo West or SupplySide West.',
  },
  {
    id: 2,
    name: 'Julphar \u2013 Gulf Pharmaceutical Industries PSC',
    yearEstablished: '1980',
    headquarters: 'Ras Al Khaimah, UAE\n(Listed on Abu Dhabi Securities Exchange \u2013 ADX)',
    keyRegions: 'UAE (headquarters & primary manufacturing); Saudi Arabia; Kuwait; Bahrain; Qatar; Oman; and export to 50+ countries across MENA, East Africa, CIS, and South Asia. Maintains direct sales forces and regulatory registrations across GCC markets.',
    businessModel: 'Integrated pharmaceutical & nutraceutical company: manufacturer, importer, and distributor. Julphar manufactures generic pharmaceuticals and consumer health/nutraceutical products, while also importing and distributing complementary international health brands across its GCC distribution network.',
    coreBusinessSegments: 'Generic pharmaceuticals (primary); Consumer healthcare & OTC products; Nutraceuticals & dietary supplements; Medical devices & hospital supplies. Consumer Health & Nutraceuticals represents a growing strategic division.',
    keyContactPerson: 'Business Development / Consumer Health Division',
    designation: 'VP / Director \u2013 Consumer Healthcare & Nutraceuticals',
    email: 'XX | ir@julphar.net (Investor Relations); info@julphar.net (General)',
    phone: 'XXXXXXXXXX',
    linkedIn: 'linkedin.com/company/julphar',
    website: 'julphar.net',
    productCategoriesHandled: 'Vitamins & minerals (A, B-complex, C, D3, E, K); herbal & Ayurvedic supplements; immune health products; maternal & infant nutrition supplements; OTC nutraceuticals; sports & active nutrition (growing segment); digestive health & probiotics; weight management products.',
    brandsDistributed: 'Julphar proprietary brands (Julvit range of vitamins; Julphar OTC consumer health brands). Also acts as licensed distributor for select international nutraceutical brands in GCC markets. Private-label nutraceutical manufacturing and distribution for regional pharmacy chains.',
    productSpecialization: 'GCC-specific nutraceutical specialization: Halal-certified formulations (critical for GCC market); maternal & infant health; vitamins & immunity support. Strong in pharmacy-channel and hospital supplement distribution. Regulatory expertise in SFDA (Saudi), DOH (UAE), and MOPH (Qatar) product registration.',
    therapeuticFocusAreas: 'Immunity & infection prevention; maternal, neonatal & paediatric health; vitamins & micronutrient deficiency management; digestive & gut health; cardiovascular wellness; bone & joint health (Vitamin D3, Calcium, K2); anti-ageing & skin nutrition.',
    geographicCoverage: 'UAE (primary hub); Saudi Arabia (largest GCC market \u2013 SFDA registered); Kuwait; Bahrain; Qatar; Oman. Export reach to Jordan, Egypt, Sudan, Iraq, and 40+ additional markets via agent/distributor network. Total operational footprint: 50+ countries.',
    targetCustomerSegments: 'Hospital pharmacies & institutional procurement (government tenders: MOH UAE, MOH KSA); retail pharmacies (Boots UAE, Life Pharmacy, Aster Pharmacy, Nahdi Medical \u2013 KSA); supermarkets & hypermarkets (Carrefour ME, LuLu Hypermarket); online health platforms (Noon.com Health, Amazon.ae); specialty wellness clinics.',
    distributionChannels: 'Direct supply to GCC pharmacies and hospital groups; government tender participation (key revenue driver in KSA); B2B supply to sub-distributors in secondary GCC markets; modern trade retail channel; e-commerce & telehealth platform supply.',
    alignmentWithPortfolio: 'VERY STRONG ALIGNMENT.\nJulphar\u2019s Consumer Healthcare division imports and locally registers nutraceutical products that directly match Kausikh\u2019s product categories (vitamins, herbal supplements, immunity products). Julphar is an established GCC regulatory navigator \u2013 a critical advantage for Indian manufacturers seeking SFDA/ESMA approvals. FideFIT can be positioned as an authentic wellness brand under Julphar\u2019s distribution umbrella with Halal certification.',
    marketEntryPotential: 'VERY HIGH.\nGCC is the fastest-growing nutraceutical import market globally (CAGR 8.4%). Julphar\u2019s existing SFDA (Saudi Arabia), DOH (UAE), and MOPH (Qatar) product registrations dramatically compress Kausikh\u2019s time-to-market. Julphar\u2019s established government tender relationships provide volume certainty for institutional supplement supply.',
    partnershipSuitability: 'VERY HIGH.\nJulphar represents an ideal first-entry GCC partner for both FideFIT brand distribution AND B2B contract manufacturing supply. Key requirements: WHO-GMP certification (preferred), Halal certification (ESMA or equivalent), Arabic-language labelling compliance. Recommend direct engagement with Julphar\u2019s Business Development and Licensing team for partnership structuring \u2013 both product supply and private-label nutraceutical manufacturing models are viable.',
  },
  {
    id: 3, name: 'Customer 3', yearEstablished: '\u0436\u0436', headquarters: '\u0436\u0436', keyRegions: '\u0436\u0436', businessModel: '\u0436\u0436', coreBusinessSegments: '\u0436\u0436', keyContactPerson: '\u0436\u0436', designation: '\u0436\u0436', email: '\u0436\u0436', phone: '\u0436\u0436', linkedIn: '\u0436\u0436', website: '\u0436\u0436', productCategoriesHandled: '\u0436\u0436', brandsDistributed: '\u0436\u0436', productSpecialization: '\u0436\u0436', therapeuticFocusAreas: '\u0436\u0436', geographicCoverage: '\u0436\u0436', targetCustomerSegments: '\u0436\u0436', distributionChannels: '\u0436\u0436', alignmentWithPortfolio: '\u0436\u0436', marketEntryPotential: '\u0436\u0436', partnershipSuitability: '\u0436\u0436',
  },
  {
    id: 4, name: 'Customer 4', yearEstablished: '\u0436\u0436', headquarters: '\u0436\u0436', keyRegions: '\u0436\u0436', businessModel: '\u0436\u0436', coreBusinessSegments: '\u0436\u0436', keyContactPerson: '\u0436\u0436', designation: '\u0436\u0436', email: '\u0436\u0436', phone: '\u0436\u0436', linkedIn: '\u0436\u0436', website: '\u0436\u0436', productCategoriesHandled: '\u0436\u0436', brandsDistributed: '\u0436\u0436', productSpecialization: '\u0436\u0436', therapeuticFocusAreas: '\u0436\u0436', geographicCoverage: '\u0436\u0436', targetCustomerSegments: '\u0436\u0436', distributionChannels: '\u0436\u0436', alignmentWithPortfolio: '\u0436\u0436', marketEntryPotential: '\u0436\u0436', partnershipSuitability: '\u0436\u0436',
  },
  {
    id: 5, name: 'Customer 5', yearEstablished: '\u0436\u0436', headquarters: '\u0436\u0436', keyRegions: '\u0436\u0436', businessModel: '\u0436\u0436', coreBusinessSegments: '\u0436\u0436', keyContactPerson: '\u0436\u0436', designation: '\u0436\u0436', email: '\u0436\u0436', phone: '\u0436\u0436', linkedIn: '\u0436\u0436', website: '\u0436\u0436', productCategoriesHandled: '\u0436\u0436', brandsDistributed: '\u0436\u0436', productSpecialization: '\u0436\u0436', therapeuticFocusAreas: '\u0436\u0436', geographicCoverage: '\u0436\u0436', targetCustomerSegments: '\u0436\u0436', distributionChannels: '\u0436\u0436', alignmentWithPortfolio: '\u0436\u0436', marketEntryPotential: '\u0436\u0436', partnershipSuitability: '\u0436\u0436',
  },
  {
    id: 6, name: 'Customer 6', yearEstablished: '\u0436\u0436', headquarters: '\u0436\u0436', keyRegions: '\u0436\u0436', businessModel: '\u0436\u0436', coreBusinessSegments: '\u0436\u0436', keyContactPerson: '\u0436\u0436', designation: '\u0436\u0436', email: '\u0436\u0436', phone: '\u0436\u0436', linkedIn: '\u0436\u0436', website: '\u0436\u0436', productCategoriesHandled: '\u0436\u0436', brandsDistributed: '\u0436\u0436', productSpecialization: '\u0436\u0436', therapeuticFocusAreas: '\u0436\u0436', geographicCoverage: '\u0436\u0436', targetCustomerSegments: '\u0436\u0436', distributionChannels: '\u0436\u0436', alignmentWithPortfolio: '\u0436\u0436', marketEntryPotential: '\u0436\u0436', partnershipSuitability: '\u0436\u0436',
  },
  {
    id: 7, name: 'Customer 7', yearEstablished: '\u0436\u0436', headquarters: '\u0436\u0436', keyRegions: '\u0436\u0436', businessModel: '\u0436\u0436', coreBusinessSegments: '\u0436\u0436', keyContactPerson: '\u0436\u0436', designation: '\u0436\u0436', email: '\u0436\u0436', phone: '\u0436\u0436', linkedIn: '\u0436\u0436', website: '\u0436\u0436', productCategoriesHandled: '\u0436\u0436', brandsDistributed: '\u0436\u0436', productSpecialization: '\u0436\u0436', therapeuticFocusAreas: '\u0436\u0436', geographicCoverage: '\u0436\u0436', targetCustomerSegments: '\u0436\u0436', distributionChannels: '\u0436\u0436', alignmentWithPortfolio: '\u0436\u0436', marketEntryPotential: '\u0436\u0436', partnershipSuitability: '\u0436\u0436',
  },
]

// All columns in order, grouped by section with section headers
const allColumns: { key: keyof DistributorData; label: string; section: string; sectionColor: string; sectionSubtitle: string }[] = [
  // Company Overview
  { key: 'name', label: "Distributor / Importer's Name", section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: "Understanding the distributor's organizational structure and market positioning" },
  { key: 'yearEstablished', label: 'Year Established', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  { key: 'headquarters', label: 'Headquarters Location / Country', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  { key: 'keyRegions', label: 'Key Regions / Markets Served / operational reach', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  { key: 'businessModel', label: 'Business Model \u2013 distributor, importer, wholesaler, or integrated nutraceutical supplier.', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  { key: 'coreBusinessSegments', label: 'Core Business Segments \u2013 nutraceuticals, pharmaceuticals, functional foods, or wellness products.', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  { key: 'keyContactPerson', label: 'Key Contact Person', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  // Contact Details
  { key: 'keyContactPerson', label: 'Key Contact Person', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'designation', label: 'Designation / Role', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'email', label: 'Email Address (verified / generic)', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'phone', label: 'Phone / WhatsApp Number', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'linkedIn', label: 'LinkedIn Profile', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'website', label: 'Website URL', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  // Product Portfolio
  { key: 'productCategoriesHandled', label: 'Nutraceutical Product Categories Handled \u2013 dietary supplements, sports nutrition, herbal supplements, functional foods, etc.', section: 'Product Portfolio', sectionColor: '#f6ad55', sectionSubtitle: 'Evaluating the types of nutraceutical products handled by the distributor' },
  { key: 'brandsDistributed', label: 'Brands Distributed \u2013 global or regional nutraceutical brands handled by the distributor.', section: 'Product Portfolio', sectionColor: '#f6ad55', sectionSubtitle: '' },
  { key: 'productSpecialization', label: 'Product Specialization \u2013 specialization in specific product categories such as sports nutrition, herbal formulations, or specialty supplements.', section: 'Product Portfolio', sectionColor: '#f6ad55', sectionSubtitle: '' },
  { key: 'therapeuticFocusAreas', label: 'Therapeutic Focus Areas \u2013 product focus across health areas such as immunity, digestive health, joint health, and sports nutrition.', section: 'Product Portfolio', sectionColor: '#f6ad55', sectionSubtitle: '' },
  // Distribution Coverage
  { key: 'geographicCoverage', label: 'Geographic Market Coverage \u2013 countries or regions where the distributor operates.', section: 'Distribution Coverage', sectionColor: '#718096', sectionSubtitle: "Assessing the distributor's geographic reach and market access" },
  { key: 'targetCustomerSegments', label: 'Target Customer Segments \u2013 pharmacies, health stores, gyms, wellness clinics, or e-commerce platforms.', section: 'Distribution Coverage', sectionColor: '#718096', sectionSubtitle: '' },
  { key: 'distributionChannels', label: 'Distribution Channels (wholesale supply to retailers, pharmacies and healthcare practitioners network, wellness networks, etc.)', section: 'Distribution Coverage', sectionColor: '#718096', sectionSubtitle: '' },
  // Partnership Potential
  { key: 'alignmentWithPortfolio', label: "Alignment with Kausikh's Nutraceutical Product Portfolio \u2013 compatibility with dietary supplements, herbal nutraceuticals, and sports nutrition products.", section: 'Partnership Potential', sectionColor: '#63b3ed', sectionSubtitle: "Evaluating the distributor's suitability as a potential partner" },
  { key: 'marketEntryPotential', label: 'Market Entry Potential \u2013 ability to support new brand introduction and product launches.', section: 'Partnership Potential', sectionColor: '#63b3ed', sectionSubtitle: '' },
  { key: 'partnershipSuitability', label: 'Partnership Suitability Assessment \u2013 qualitative evaluation of distributor fit based on portfolio and market presence.', section: 'Partnership Potential', sectionColor: '#63b3ed', sectionSubtitle: '' },
]

// Build unique section groups for the section header rows
const sectionGroups: { name: string; color: string; subtitle: string; colSpan: number; startIdx: number }[] = []
let lastSection = ''
for (let i = 0; i < allColumns.length; i++) {
  const col = allColumns[i]
  if (col.section !== lastSection) {
    sectionGroups.push({ name: col.section, color: col.sectionColor, subtitle: col.sectionSubtitle || allColumns.find(c => c.section === col.section && c.sectionSubtitle)?.sectionSubtitle || '', colSpan: 1, startIdx: i })
    lastSection = col.section
  } else {
    sectionGroups[sectionGroups.length - 1].colSpan++
  }
}

interface Props {
  title?: string
  height?: number
}

export default function PharmaDatabaseTable({ title, height = 600 }: Props) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = sampleData.filter(d =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.headquarters.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.keyRegions.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleExportCSV = () => {
    const keys = allColumns.map(c => c.key)
    const headerLabels = allColumns.map(c => `"${c.label.replace(/"/g, '""')}"`)
    const rows = sampleData.map(d =>
      keys.map(k => `"${(d[k] || '').toString().replace(/"/g, '""').replace(/\n/g, ' ')}"` ).join(',')
    )
    const csv = [headerLabels.join(','), ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'nutraceuticals_database.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2d3748] to-[#4a5568] text-white px-6 py-4 rounded-t-lg">
        <h2 className="text-sm font-bold text-center">
          PARTNER IDENTIFICATION &ndash; GLOBAL DISTRIBUTOR / IMPORTER DATABASE | Qualified Partner Prospects
        </h2>
        <p className="text-[10px] text-center mt-1 text-gray-300">
          This section will develop a structured global database of nutraceutical distributors and importers, enabling Kausikh Therapeutics Pvt Ltd to identify potential B2B distribution partners and market entry channels.
        </p>
        <p className="text-[10px] text-center mt-0.5 text-gray-300">
          The analysis will focus on companies actively distributing dietary supplements, sports nutrition products, herbal nutraceuticals, and functional nutrition products across key international markets.
        </p>
      </div>

      {/* Search + Export bar */}
      <div className="bg-white border-x border-gray-200 px-4 py-2 flex items-center justify-end gap-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search distributors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-7 pr-3 py-1.5 text-xs border rounded-md w-48 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
          />
        </div>
        <button
          onClick={handleExportCSV}
          className="flex items-center gap-1 px-3 py-1.5 text-xs bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Download className="h-3 w-3" />
          Export CSV
        </button>
      </div>

      {/* Full unified table */}
      <div className="overflow-auto border border-gray-200 rounded-b-lg" style={{ maxHeight: height }}>
        <table className="text-xs border-collapse" style={{ minWidth: allColumns.length * 220 }}>
          {/* Section header row */}
          <thead className="sticky top-0 z-20">
            <tr>
              {sectionGroups.map((sg, i) => (
                <th
                  key={i}
                  colSpan={sg.colSpan}
                  className="px-3 py-2 text-center font-bold border border-gray-300 text-black"
                  style={{ backgroundColor: sg.color, color: ['#f6ad55', '#63b3ed'].includes(sg.color) ? '#000' : '#fff' }}
                >
                  <div className="text-sm font-bold">{sg.name}</div>
                  {sg.subtitle && <div className="text-[10px] font-normal italic mt-0.5 opacity-80">{sg.subtitle}</div>}
                </th>
              ))}
            </tr>
            {/* Column header row */}
            <tr>
              {allColumns.map((col, i) => (
                <th
                  key={i}
                  className="px-3 py-2 text-left font-semibold border border-gray-300 min-w-[200px] max-w-[280px] text-black"
                  style={{ backgroundColor: col.sectionColor, color: ['#f6ad55', '#63b3ed'].includes(col.sectionColor) ? '#000' : '#fff' }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIdx) => (
              <tr
                key={row.id}
                className={`${rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
              >
                {allColumns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className="px-3 py-3 border border-gray-200 align-top min-w-[200px] max-w-[280px] text-black"
                  >
                    <div className="whitespace-pre-line leading-relaxed text-black">
                      {(row[col.key] || '').toString()}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
