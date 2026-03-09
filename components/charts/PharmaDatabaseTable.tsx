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
    name: 'Cencora Inc.\n(formerly AmerisourceBergen Corporation)',
    yearEstablished: '2001\n(AmerisSource founded 1985; rebranded to Cencora 2023)',
    headquarters: 'Conshohocken, Pennsylvania, USA\n(NYSE: COR)',
    keyRegions: 'United States \u2013 nationwide (all 50 states + Puerto Rico + U.S. territories). International: Canada (through McKesson Canada partnership arrangement); select pharmaceutical distribution in Germany and select EU markets via Alliance Healthcare (majority-owned subsidiary). Global specialty logistics through World Courier subsidiary (operating in 50+ countries for specialty pharma, biologics, and clinical trial logistics).',
    businessModel: 'Integrated pharmaceutical wholesale distributor and specialty logistics company.\nCencora does not manufacture pharmaceutical products; it operates as a pure-play B2B distributor purchasing from manufacturers and supplying to healthcare providers, pharmacy chains, hospital systems, and specialty pharmacies. Also provides 3PL/contract logistics services for biopharmaceutical companies through World Courier.',
    coreBusinessSegments: 'Prescription pharmaceutical distribution (Rx \u2013 primary, ~95% of revenue); Specialty pharmaceuticals & biologics (oncology, immunology \u2013 largest and fastest-growing segment); Veterinary pharmaceuticals (MWI Animal Health subsidiary); Consumer healthcare & OTC products (through retail pharmacy partnerships); Global specialty logistics & clinical trial supply chain (World Courier).',
    keyContactPerson: 'Steven H. Collis',
    designation: 'Chairman, President & Chief Executive Officer',
    email: 'XX | mrsupport@cencora.com',
    phone: 'XXXXXXXXXXXX',
    linkedIn: 'linkedin.com/company/cencora',
    website: 'cencora.com',
    productCategoriesHandled: 'Prescription (Rx) branded and generic medicines (full formulary \u2013 30,000+ SKUs); Specialty pharmaceuticals (oncology agents, biologics, biosimilars, immunology drugs, rare disease therapies); Vaccines & immunologicals; Active Pharmaceutical Ingredients (APIs \u2013 through specialty sourcing arm).',
    brandsDistributed: 'Cencora distributes products from virtually all major pharmaceutical manufacturers including: AbbVie; Pfizer; Bristol Myers Squibb; Johnson & Johnson (Janssen); Merck & Co. (MSD); Eli Lilly; AstraZeneca; Novartis; Amgen; Genentech/Roche; Gilead Sciences; Sanofi; GSK; Takeda; Teva Pharmaceuticals (generics); Mylan/Viatris (generics).',
    productSpecialization: 'Full-spectrum pharmaceutical distribution with particular depth in: Specialty Pharmaceuticals \u2013 oncology (largest specialty segment), immunology, rare diseases, and biologics/biosimilars (via AmerisourceBergen Specialty Group \u2013 ABSG). Generic pharmaceutical distribution \u2013 one of the three largest US generic drug distributors through Good Neighbor Pharmacy and independent pharmacy network. Beta-lactam antibiotic distribution (directly relevant to Kausikh\u2019s Beta-lactam manufacturing) is handled through standard Rx distribution channels.',
    therapeuticFocusAreas: 'Oncology (primary specialty \u2013 through ION Solutions, a leading GPO for oncology); Immunology & autoimmune disorders; Infectious diseases & anti-infectives (including beta-lactam antibiotics \u2013 highly relevant to Kausikh); Cardiovascular & metabolic disorders; CNS & neurology; etc.',
    geographicCoverage: 'United States \u2013 nationwide primary market (all 50 states, PR, and U.S. territories). Through Alliance Healthcare subsidiary: Germany, UK, Spain, Portugal, Italy, and select Central & Eastern European markets. Through World Courier (global specialty logistics): 50+ countries for clinical trial supply and specialty pharma logistics. Combined group revenue FY2023: ~$262 billion.',
    targetCustomerSegments: 'Retail pharmacy chains, Independent community pharmacies; Hospital systems & integrated delivery networks (IDNs); Specialty pharmacies (oncology, immunology, rare disease); Government procurement (DoD, VA hospitals); etc.',
    distributionChannels: 'Primary wholesale distribution centre (DC) \u2014 retail pharmacy delivery (daily); Hospital and IDN direct supply via dedicated hospital division; Specialty pharmacy distribution (cold chain, controlled substances, high-value biologics); Government tender participation (VA, DoD pharmaceutical contracts).',
    alignmentWithPortfolio: 'VERY STRONG ALIGNMENT.\nCencora is one of the three pillars of US pharmaceutical distribution. Generic antibiotic distribution is a core Cencora capability. FDFs (tablets, capsules, oral suspensions) from USFDA-approved Indian manufacturing facilities are a standard Cencora sourcing profile.\nNutraceutical/consumer health products align with Cencora\u2019s OTC distribution arm.',
    marketEntryPotential: 'VERY HIGH.\nThe US is the world\u2019s largest pharmaceutical import market (~$200B+ annual pharmaceutical imports).\nCencora\u2019s network of 7,000+ independent pharmacy members and relationships with all major hospital chains means a single distribution agreement unlocks national US market access.\nUSFDA approval of Kausikh\u2019s manufacturing facility is the primary prerequisite.',
    partnershipSuitability: 'HIGH.\nKey prerequisites: USFDA facility registration and 483 inspection clearance; ANDA approval for target molecules; cGMP compliance (21 CFR Parts 210/211); DEA registration (for controlled substances, if applicable); Cencora manufacturer contracting process (typically 6\u201312 months from initial contact).\n\nRecommended engagement: ANDA filing with USFDA for priority generic molecules (amoxicillin, amoxicillin-clavulanate, cephalexin \u2013 large US market), followed by engagement with Cencora\u2019s Generics & Biosimilars Manufacturer Services team.',
  },
  {
    id: 2,
    name: 'PHOENIX Pharma Group\n(PHOENIX Pharmahandel GmbH & Co. KG)',
    yearEstablished: '1994\n(PHOENIX Group name; roots in Herba Chemosan Group, est. 1948)',
    headquarters: 'Mannheim, Germany\n(Private \u2013 owned by PHOENIX Group Holding, Hamburg)',
    keyRegions: '29 European countries \u2013 one of the most extensive pharmaceutical distribution networks in Europe. Key markets: Germany (HQ, largest single market), UK (through Numark/Alliance), Netherlands, Belgium, Norway, Sweden, Denmark, Finland, Austria, Switzerland, Poland, Czech Republic, Slovakia, Hungary, Romania, Serbia, Croatia, Bulgaria, and Baltic states. Group operates 27,000+ pharmacies (owned, franchised, or partnered) and 190+ pharmaceutical wholesale distribution centres across Europe.',
    businessModel: 'Integrated pharmaceutical wholesale distributor, pharmacy retailer, and healthcare services company.\nPHOENIX operates at multiple levels of the pharmaceutical supply chain:\n(1) Wholesale pharmaceutical distribution (B2B \u2013 primary revenue driver);\n(2) Owned and franchised retail pharmacy chains across Europe;\n(3) Pre-wholesale/parallel trade;\n(4) Pharmaceutical logistics and cold chain services for manufacturers.',
    coreBusinessSegments: 'Prescription pharmaceutical wholesale distribution (primary \u2013 ~85% of revenue); Generic medicines distribution (significant and growing \u2013 leveraging German and European generic tender markets); Consumer healthcare & OTC products; Medical devices & healthcare consumables; Pharmaceutical logistics & contract supply chain services; Retail pharmacy operations (BENU Pharmacies franchise; Rowlands Pharmacy UK, and other national pharmacy chains across 18 European countries).',
    keyContactPerson: 'Oliver Windholz\n(Chief Executive Officer \u2013 verify via phoenixgroup.eu/en/about-us/management)',
    designation: 'Chief Executive Officer',
    email: 'XX | General: info@phoenixgroup.eu',
    phone: 'XXXXXXXXXXXX',
    linkedIn: 'linkedin.com/company/phoenix-group-european-healthcare',
    website: 'phoenixgroup.eu',
    productCategoriesHandled: 'Prescription (Rx) branded and generic medicines (full European formulary \u2013 100,000+ SKUs); Generic and biosimilar medicines (growing share of European tender markets); Biologics and specialty pharmaceuticals; Active Pharmaceutical Ingredients (APIs \u2013 through select sourcing partnerships with Indian and Chinese API manufacturers); Finished Dosage Forms (FDFs) \u2013 tablets, capsules, injectables, inhalers, patches; Consumer healthcare & OTC products; Medical devices & diagnostics.',
    brandsDistributed: 'PHOENIX distributes products from all major European and global pharmaceutical manufacturers: Pfizer; Novartis; Roche; AstraZeneca; Sanofi; GSK; Bayer; Boehringer Ingelheim; Merck KGaA (Germany); Teva (generics \u2013 major); Sandoz (Novartis generics \u2013 now independent); STADA Arzneimittel (generic pharma \u2013 Germany); Hexal (Sandoz Germany); Ratiopharm (Teva Germany); Indian generic manufacturers supplying EU market via EU-GMP approved facilities (Sun Pharma, Dr. Reddy\u2019s, Cipla EU-registered products).',
    productSpecialization: 'Full-spectrum pharmaceutical wholesale with particular depth in: European generic medicine distribution across national tender markets (Germany, Nordics, Netherlands, CEE \u2013 where generic penetration is high and cost is a key procurement driver);\n\nBeta-lactam antibiotic distribution in Europe \u2013 amoxicillin, amoxicillin-clavulanate, piperacillin-tazobactam, and cephalosporins are high-volume European generic categories (directly relevant to Kausikh\u2019s beta-lactam manufacturing); Cold chain distribution for biologics and vaccines (PHOENIX operates EU GDP-compliant cold chain logistics across all 29 countries); Parallel trade pharmaceutical distribution (European internal market flows).',
    therapeuticFocusAreas: 'Anti-infectives & antibiotics (beta-lactams, fluoroquinolones, macrolides \u2013 high-volume European market \u2013 directly aligned with Kausikh\u2019s beta-lactam capability); Cardiovascular & metabolic disorders (largest therapeutic area by volume in Europe);',
    geographicCoverage: '29 European countries (comprehensive EU + EEA + select non-EU European markets). Primary commercial weight in: Germany (largest European pharma market), UK, Netherlands, Belgium, Scandinavia (Norway, Sweden, Denmark, Finland), Austria, Switzerland, Czech Republic, Poland (through partnerships), Romania, Bulgaria, and Baltic states (Estonia, Latvia, Lithuania). Group annual revenue: ~EUR 40 billion (FY2022/23), making PHOENIX the 2nd largest pharmaceutical wholesaler in Europe.',
    targetCustomerSegments: 'Retail pharmacies (primary): 27,000+ owned, franchised, and partnered pharmacies across Europe (BENU Pharmacies in Netherlands, Belgium, CEE; Rowlands Pharmacy in UK; Pharmaprix and others). Hospital pharmacies and clinical procurement. Independent pharmacies (across all 29 operating countries). Government and public health procurement (national health service tenders \u2013 NHS UK, GKV Germany, Zorgverzekering Netherlands). Wholesale buyers and secondary distributors in smaller European markets.',
    distributionChannels: 'Full-line wholesale distribution to pharmacies (primary \u2013 daily delivery); Hospital and institutional supply chain management; Government and NHS/public health tender fulfilment; Pre-wholesale/parallel trade distribution (EU internal market); Cold chain and controlled substance logistics (EU GDP compliant); Pharmaceutical manufacturer outsourced distribution (3PL services); E-procurement and EDI order management platform (PhoenixOrder).',
    alignmentWithPortfolio: 'VERY STRONG ALIGNMENT.\nPHOENIX is the primary distribution gateway to Europe\u2019s pharmaceutical market for Indian generic and specialty pharma manufacturers.\nKausikh\u2019s Beta-lactam manufacturing (amoxicillin, amoxicillin-clavulanate, penicillin derivatives) maps directly to Europe\u2019s highest-volume generic antibiotic categories, for which PHOENIX is a major distributor across 23 markets.',
    marketEntryPotential: 'VERY HIGH.\nEU is the world\u2019s second-largest pharmaceutical market with strong generic medicine penetration \u2013 Germany (GKV mandatory generic substitution), Netherlands, UK (NHS generic procurement), and CEE markets all heavily rely on cost-competitive generic supply from India.\nPHOENIX\u2019s 23-country network means a single supply agreement can unlock pan-European distribution.',
    partnershipSuitability: 'VERY HIGH.\nKey prerequisites for EU market entry via PHOENIX:\nEU-GMP certification (mandatory \u2013 from CDSCO-approved and EMA/national authority inspected facility); Marketing Authorisation (MA) \u2013 either full MA or MR/DCP procedure in 1\u20133 EU countries to start; GDP-compliant quality agreements with PHOENIX; REACH/CLP compliance for API supply.',
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
  { key: 'businessModel', label: 'Business Model \u2013 Distributor, Importer, Wholesaler, or Integrated Pharmaceutical Supply Company', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  { key: 'coreBusinessSegments', label: 'Core Business Segments \u2013 Prescription Pharmaceuticals, Generic Medicines, Biologics, Vaccines, Active Pharmaceutical Ingredients, Consumer Healthcare.', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  { key: 'keyContactPerson', label: 'Key Contact Person', section: 'Company Overview', sectionColor: '#4a5568', sectionSubtitle: '' },
  // Contact Details
  { key: 'keyContactPerson', label: 'Key Contact Person', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'designation', label: 'Designation / Role', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'email', label: 'Email Address (verified / generic)', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'phone', label: 'Phone / WhatsApp Number', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'linkedIn', label: 'LinkedIn Profile', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  { key: 'website', label: 'Website URL', section: 'Contact Details', sectionColor: '#ed8936', sectionSubtitle: '' },
  // Product Portfolio
  { key: 'productCategoriesHandled', label: 'Pharmaceutical Product Categories Handled \u2013 prescription pharmaceuticals, generic medicines, biologics, vaccines, active pharmaceutical ingredients, finished dosage formulations, and consumer healthcare products', section: 'Product Portfolio', sectionColor: '#f6ad55', sectionSubtitle: 'Evaluating the types of nutraceutical products handled by the distributor' },
  { key: 'brandsDistributed', label: 'Brands Distributed \u2013 global or regional pharmaceutical brands handled by the distributor', section: 'Product Portfolio', sectionColor: '#f6ad55', sectionSubtitle: '' },
  { key: 'productSpecialization', label: 'Product Specialization \u2013 specialization in specific product categories such as oncology drugs, anti-infectives, cardiovascular therapies, central nervous system drugs, specialty pharmaceuticals, or complex formulations.', section: 'Product Portfolio', sectionColor: '#f6ad55', sectionSubtitle: '' },
  { key: 'therapeuticFocusAreas', label: 'Therapeutic Focus Areas \u2013 focus across therapeutic areas such as oncology, immunology, infectious diseases, cardiology, neurology, metabolic disorders, and respiratory diseases.', section: 'Product Portfolio', sectionColor: '#f6ad55', sectionSubtitle: '' },
  // Distribution Coverage
  { key: 'geographicCoverage', label: 'Geographic Market Coverage \u2013 countries or regions where the distributor operates.', section: 'Distribution Coverage', sectionColor: '#718096', sectionSubtitle: "Assessing the distributor's geographic reach and market access" },
  { key: 'targetCustomerSegments', label: 'Target Customer Segments \u2013 hospitals, retail pharmacies, clinics, government procurement agencies, healthcare institutions, and wholesale buyers.', section: 'Distribution Coverage', sectionColor: '#718096', sectionSubtitle: '' },
  { key: 'distributionChannels', label: 'Distribution Channels \u2013 wholesale supply to hospitals, retail pharmacy networks, clinics, government tenders, institutional buyers, and specialty distribution channels.', section: 'Distribution Coverage', sectionColor: '#718096', sectionSubtitle: '' },
  // Partnership Potential
  { key: 'alignmentWithPortfolio', label: "Alignment with Kausikh's Nutraceutical Product Portfolio \u2013 compatibility with prescription pharmaceuticals, generic medicines, biologics, vaccines, active pharmaceutical ingredients, and finished dosage formulations.", section: 'Partnership Potential', sectionColor: '#63b3ed', sectionSubtitle: "Evaluating the distributor's suitability as a potential partner" },
  { key: 'marketEntryPotential', label: 'Market Entry Potential \u2013 ability to support new product launches, regulatory pathway navigation, commercialization, and expansion across target markets.', section: 'Partnership Potential', sectionColor: '#63b3ed', sectionSubtitle: '' },
  { key: 'partnershipSuitability', label: 'Partnership Suitability Assessment \u2013 qualitative evaluation of distributor fit based on product portfolio alignment, therapeutic focus, market presence, channel strength, and regulatory capabilities.', section: 'Partnership Potential', sectionColor: '#63b3ed', sectionSubtitle: '' },
]

// Deduplicate: remove the duplicate keyContactPerson from Company Overview (it appears at end of Company Overview AND start of Contact Details in the images)
// Company Overview ends with "Key Contact Person", then Contact Details section repeats it. Keep both as in the image.

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
    a.download = 'pharma_database.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2d3748] to-[#4a5568] text-white px-6 py-4 rounded-t-lg">
        <h2 className="text-sm font-bold text-center">
          PARTNER IDENTIFICATION \u2013 GLOBAL DISTRIBUTOR / IMPORTER DATABASE | Qualified Partner Prospects
        </h2>
        <p className="text-[10px] text-center mt-1 text-gray-300">
          This section will develop a structured global database of pharmaceutical distributors and importers, enabling Kausikh Therapeutics Pvt Ltd to identify potential B2B distribution partners and market entry channels.
        </p>
        <p className="text-[10px] text-center mt-0.5 text-gray-300">
          The analysis will focus on distribution partners with active presence in prescription pharmaceuticals, generic medicines, biologics, vaccines, active pharmaceutical ingredients, and finished dosage formulations across key regions.
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
