export interface IndustryDetail {
  name: string;
  iconName: string;
  description: string;
}

export const industriesData: IndustryDetail[] = [
  {
    name: "Education",
    iconName: "GraduationCap",
    description: "Empowering universities, colleges, and EdTech startups with patent filings, digital training platforms, and innovation bootcamps."
  },
  {
    name: "Healthcare",
    iconName: "HeartPulse",
    description: "Securing novel medical device patents, developing HIPAA-compliant patient management apps, and digitizing clinical workflows."
  },
  {
    name: "Manufacturing",
    iconName: "Factory",
    description: "Streamlining inventory management with custom ERP software, automating production reporting, and patenting industrial design innovations."
  },
  {
    name: "Agriculture",
    iconName: "Sprout",
    description: "Filing patent protections for smart agri-tech tools, deploying analytics software for crop yields, and supporting rural MSME initiatives."
  },
  {
    name: "Government",
    iconName: "Building2",
    description: "Fostering state-sponsored innovation programs, driving digital literacy training, and managing public sector networking summits."
  },
  {
    name: "MSMEs",
    iconName: "Briefcase",
    description: "Providing affordable brand registration, corporate compliance structures, website setups, and tailored business strategy consulting."
  },
  {
    name: "IT & Software",
    iconName: "Laptop",
    description: "Copyrighting proprietary software codes, delivering full-stack developer talent training, and advising on cloud system architectures."
  },
  {
    name: "Research & Development",
    iconName: "SearchCode",
    description: "Conducting patent landscapes, drafting intellectual property applications, and matching academic innovations with industrial applications."
  },
  {
    name: "Startups",
    iconName: "Rocket",
    description: "Supporting early-stage founders with pitch decks, tech stacks, rapid MVP development, legal structures, and mentor networking."
  },
  {
    name: "Corporate",
    iconName: "Building",
    description: "Structuring technology licensing agreements, providing leadership masterclasses, and organizing annual shareholder conferences."
  }
];
