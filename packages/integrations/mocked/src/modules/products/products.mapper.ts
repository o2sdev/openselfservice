import { Products } from '@o2s/framework/modules';

const MOCK_PRODUCT_1: Products.Model.Product = {
    id: 'PRD-004',
    sku: 'ABC-12345-S-BL',
    name: 'Rotary Hammer',
    description:
        '<p>The <strong>Rotary Hammer</strong> is a professional heavy-duty hammer drill engineered for demanding concrete and masonry applications. Built with industrial-grade components, this tool delivers exceptional performance and durability for construction professionals.</p><h3>Power and Performance</h3><p>Equipped with a high-torque motor, the Rotary Hammer delivers powerful impact energy for efficient drilling through the toughest materials. The variable speed control allows for precise operation across different material types.</p><p>Key features include:</p><ul><li>High-impact energy for fast drilling</li><li>Variable speed control for precision work</li><li>Ergonomic design for reduced operator fatigue</li><li>Dust extraction system for cleaner work environment</li></ul><h3>Durability and Reliability</h3><p>Constructed with premium materials and advanced engineering, this rotary hammer is designed to withstand continuous use in challenging construction environments. The robust housing protects internal components from dust and debris.</p>',
    shortDescription: 'Professional heavy-duty hammer drill for concrete and masonry',
    subtitle: 'Power Tools • Construction Equipment',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
        width: 640,
        height: 656,
        alt: 'Rotary Hammer',
    },
    price: {
        value: 100,
        currency: 'USD',
    },
    link: '/products/PRD-004',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: '2024', icon: 'Calendar' },
        { value: 'Corded', icon: 'Plug' },
        { value: 'Heavy Duty', icon: 'Settings' },
    ],
    detailedSpecs: [
        { label: 'Impact Energy', value: '3.2 J' },
        { label: 'Power', value: '1200 W' },
        { label: 'Max Speed', value: '1000 RPM' },
        { label: 'Chuck Size', value: '1/2"' },
        { label: 'Weight', value: '4.2 kg' },
        { label: 'Voltage', value: '230V' },
        { label: 'Cable Length', value: '3 m' },
        { label: 'Certification', value: 'CE, ETL' },
    ],
    location: 'New York, NY',
};

const MOCK_PRODUCT_2: Products.Model.Product = {
    id: 'PRD-005',
    sku: 'ABC-12345-S-BL',
    name: 'Cordless Angle Grinder',
    description:
        '<p>The <strong>Cordless Angle Grinder</strong> offers professional-grade cutting and grinding performance without the limitations of a power cord. Powered by a 22V battery platform, this tool provides exceptional freedom of movement and convenience.</p><h3>Battery Technology</h3><p>Built on a 22V lithium-ion battery platform, this angle grinder delivers consistent power output throughout the battery charge cycle. The intelligent battery management system protects against overcharging and extends battery life.</p><p>Key features include:</p><ul><li>22V lithium-ion battery platform</li><li>Fast charging technology (30 minutes to 80%)</li><li>Battery level indicator</li><li>Compatible with entire 22V tool ecosystem</li></ul><h3>Performance and Safety</h3><p>With a powerful brushless motor, the grinder maintains consistent speed under load. The safety features include electronic brake, spindle lock, and protective guard for operator safety.</p>',
    shortDescription: 'Cordless angle grinder with 22V battery platform',
    subtitle: 'Power Tools • Cordless Solutions',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
        width: 640,
        height: 656,
        alt: 'Cordless Angle Grinder',
    },
    price: {
        value: 199.99,
        currency: 'USD',
    },
    link: '/products/PRD-005',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
        {
            label: 'Promo',
            variant: 'destructive',
        },
    ],
    keySpecs: [
        { value: '2024', icon: 'Calendar' },
        { value: 'Cordless', icon: 'Battery' },
        { value: '22V', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Disc Size', value: '4.5"' },
        { label: 'No-Load Speed', value: '10,000 RPM' },
        { label: 'Battery Voltage', value: '22V' },
        { label: 'Battery Capacity', value: '5.0 Ah' },
        { label: 'Weight', value: '2.8 kg' },
        { label: 'Charging Time', value: '30 min (80%)' },
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'Certification', value: 'CE, UL' },
    ],
    location: 'Los Angeles, CA',
};

const MOCK_PRODUCT_3: Products.Model.Product = {
    id: 'PRD-006',
    sku: 'ABC-12345-S-BL',
    name: 'Laser Measurement',
    description:
        '<p>The <strong>Laser Measurement Device</strong> is a precision tool designed for accurate distance measurements in construction, surveying, and interior design applications. Utilizing advanced laser technology, it provides instant and reliable measurements with professional-grade accuracy.</p><h3>Precision and Accuracy</h3><p>With a measurement range of up to 100 meters and accuracy of ±1.5mm, this device ensures reliable results for critical measurements. The laser class 2 technology is safe for use in various lighting conditions.</p><p>Key features include:</p><ul><li>Measurement range up to 100 meters</li><li>Accuracy of ±1.5mm</li><li>Multiple measurement modes (distance, area, volume)</li><li>Backlit display for visibility in all conditions</li></ul><h3>User-Friendly Design</h3><p>The intuitive interface and ergonomic design make this device easy to use for both professionals and DIY enthusiasts. The device stores measurement history and includes calculation functions for area and volume.</p>',
    shortDescription: 'Laser measurement device for distance measurements',
    subtitle: 'Measurement Tools • Precision Instruments',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
        width: 640,
        height: 656,
        alt: 'Laser Measurement',
    },
    price: {
        value: 100,
        currency: 'USD',
    },
    link: '/products/PRD-006',
    type: 'PHYSICAL',
    category: 'MEASUREMENT',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: '2024', icon: 'Calendar' },
        { value: '100m Range', icon: 'Maximize' },
        { value: '±1.5mm', icon: 'Target' },
    ],
    detailedSpecs: [
        { label: 'Measurement Range', value: '0.05 - 100 m' },
        { label: 'Accuracy', value: '±1.5 mm' },
        { label: 'Laser Class', value: 'Class 2' },
        { label: 'Display', value: 'Backlit LCD' },
        { label: 'Battery', value: '2x AAA' },
        { label: 'Battery Life', value: '5000 measurements' },
        { label: 'Operating Temperature', value: '0°C to +40°C' },
        { label: 'Certification', value: 'CE, FCC' },
    ],
    location: 'Chicago, IL',
};

const MOCK_PRODUCT_4: Products.Model.Product = {
    id: 'PRD-007',
    sku: 'ABC-12345-S-BL',
    name: 'Cordless Drill Driver',
    description:
        '<p>The <strong>Cordless Drill Driver</strong> is a versatile power tool designed for drilling and driving applications. Built on the 22V battery platform, it offers exceptional power and runtime for both professional contractors and DIY enthusiasts.</p><h3>Power and Versatility</h3><p>Equipped with a brushless motor, this drill driver delivers maximum power and efficiency. The two-speed transmission allows for optimal performance in both drilling and driving modes, while the variable speed trigger provides precise control.</p><p>Key features include:</p><ul><li>22V brushless motor for maximum power</li><li>Two-speed transmission (0-450/0-1800 RPM)</li><li>20+1 torque settings for precise control</li><li>LED work light for improved visibility</li></ul><h3>Ergonomics and Durability</h3><p>The compact and lightweight design reduces operator fatigue during extended use. The all-metal chuck ensures secure bit retention, while the ergonomic handle provides comfortable grip and control.</p>',
    shortDescription: 'Cordless drill driver with 22V battery platform',
    subtitle: 'Power Tools • Drilling Solutions',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
        width: 640,
        height: 656,
        alt: 'Cordless Drill Driver',
    },
    price: {
        value: 100,
        currency: 'USD',
    },
    link: '/products/PRD-007',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: '2024', icon: 'Calendar' },
        { value: 'Cordless', icon: 'Battery' },
        { value: '22V', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Chuck Size', value: '1/2"' },
        { label: 'Max Torque', value: '65 Nm' },
        { label: 'Speed Range', value: '0-450/0-1800 RPM' },
        { label: 'Battery Voltage', value: '22V' },
        { label: 'Weight', value: '2.1 kg' },
        { label: 'Torque Settings', value: '20+1' },
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'Certification', value: 'CE, ETL' },
    ],
    location: 'Houston, TX',
};

const MOCK_PRODUCT_5: Products.Model.Product = {
    id: 'PRD-008',
    sku: 'ABC-12345-S-BL',
    name: 'Engineering Software',
    description:
        '<p><strong>Engineering Software</strong> is a comprehensive solution for construction engineering calculations and design analysis. This advanced software suite provides engineers and architects with powerful tools for structural analysis, load calculations, and compliance verification.</p><h3>Comprehensive Calculation Tools</h3><p>The software includes modules for structural analysis, material calculations, and code compliance checking. With support for multiple international building codes, it ensures your designs meet regulatory requirements.</p><p>Key features include:</p><ul><li>Structural analysis and design calculations</li><li>Load analysis for various construction materials</li><li>Code compliance verification (IBC, Eurocode, etc.)</li><li>3D modeling and visualization capabilities</li></ul><h3>User Interface and Workflow</h3><p>The intuitive interface streamlines the design process, while automated calculations reduce manual errors. The software generates detailed reports and documentation for project submissions and client presentations.</p>',
    shortDescription: 'Advanced software for construction engineering calculations',
    subtitle: 'Software Solutions • Engineering Tools',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
        width: 640,
        height: 656,
        alt: 'Engineering Software',
    },
    price: {
        value: 39.99,
        currency: 'USD',
    },
    link: '/products/PRD-008',
    type: 'VIRTUAL',
    category: 'SOFTWARE',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: '2024', icon: 'Calendar' },
        { value: 'Cloud', icon: 'Cloud' },
        { value: 'Multi-User', icon: 'Users' },
    ],
    detailedSpecs: [
        { label: 'Platform', value: 'Windows, macOS, Linux' },
        { label: 'License Type', value: 'Annual Subscription' },
        { label: 'Max Users', value: 'Unlimited' },
        { label: 'Supported Codes', value: 'IBC, Eurocode, AS/NZS' },
        { label: 'Cloud Storage', value: '100 GB included' },
        { label: 'Support', value: '24/7 Email & Chat' },
        { label: 'Updates', value: 'Included' },
        { label: 'Training', value: 'Online courses included' },
    ],
    location: 'Remote',
};

const MOCK_PRODUCT_6: Products.Model.Product = {
    id: 'PRD-009',
    sku: 'ABC-12345-S-BL',
    name: 'RentPro Industrial™ – Flexible Equipment Rental Solutions',
    description:
        '<p><strong>RentPro Industrial™</strong> provides comprehensive equipment rental solutions for construction, manufacturing, and industrial operations. Our flexible rental programs are designed to meet your project needs, whether you require equipment for a day, a month, or longer.</p><h3>Flexible Rental Terms</h3><p>Choose from short-term daily rentals for quick projects or long-term monthly contracts for extended operations. All rental agreements include full maintenance and technical support to ensure your equipment operates at peak performance.</p><p>Key features include:</p><ul><li>Short & Long-Term Rentals</li><li>Wide Equipment Selection</li><li>Maintenance & Support Included</li><li>Flexible delivery and pickup options</li><li>24/7 technical support hotline</li></ul><h3>Equipment Selection</h3><p>Our extensive inventory includes power tools, heavy machinery, measurement equipment, and specialized industrial tools. All equipment is regularly maintained and inspected to meet safety standards.</p>',
    shortDescription: 'Flexible equipment rental solutions with maintenance and support included',
    subtitle: 'Equipment Rental • Industrial Solutions',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-rental.jpg',
        width: 640,
        height: 656,
        alt: 'RentPro Industrial™ – Flexible Equipment Rental Solutions',
    },
    price: {
        value: 79.83,
        currency: 'USD',
    },
    link: '/products/PRD-009',
    type: 'VIRTUAL',
    category: 'RENTAL',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: 'Flexible', icon: 'Calendar' },
        { value: '24/7 Support', icon: 'Headphones' },
        { value: 'Maintenance', icon: 'Wrench' },
    ],
    detailedSpecs: [
        { label: 'Rental Period', value: 'Daily, Weekly, Monthly' },
        { label: 'Equipment Categories', value: '50+ categories' },
        { label: 'Delivery Service', value: 'Available' },
        { label: 'Support Hours', value: '24/7' },
        { label: 'Maintenance', value: 'Included' },
        { label: 'Insurance', value: 'Optional coverage' },
        { label: 'Minimum Rental', value: '1 day' },
        { label: 'Payment Terms', value: 'Net 30 available' },
    ],
    location: 'Multiple Locations',
};

const MOCK_PRODUCT_7: Products.Model.Product = {
    id: 'PRD-010',
    sku: 'ABC-12345-S-BL',
    name: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
    description:
        '<p><strong>PrecisionPro Calibration™</strong> provides ISO-certified calibration services to ensure your industrial equipment maintains optimal accuracy and performance. Our certified technicians use traceable standards to deliver precise calibration results that meet international quality standards.</p><h3>ISO-Certified Services</h3><p>All calibration services are performed according to ISO/IEC 17025 standards, ensuring traceability and compliance with quality management requirements. Our calibration certificates are recognized worldwide and include detailed measurement data.</p><p>Key features include:</p><ul><li>ISO-Certified Calibration</li><li>On-Site & Remote Services</li><li>Detailed Reports</li><li>Traceable to national standards</li><li>Fast turnaround times</li></ul><h3>Service Options</h3><p>Choose from on-site calibration at your facility or send your equipment to our certified laboratory. Both options include comprehensive documentation and calibration certificates for your records.</p>',
    shortDescription: 'ISO-certified calibration services for industrial equipment',
    subtitle: 'Calibration Services • Quality Assurance',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-calibration.jpg',
        width: 640,
        height: 656,
        alt: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
    },
    price: {
        value: 19.99,
        currency: 'USD',
    },
    link: '/products/PRD-010',
    type: 'VIRTUAL',
    category: 'TRAINING',
    tags: [
        {
            label: 'Promo',
            variant: 'destructive',
        },
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: 'ISO 17025', icon: 'Award' },
        { value: 'On-Site', icon: 'MapPin' },
        { value: 'Certified', icon: 'CheckCircle' },
    ],
    detailedSpecs: [
        { label: 'Certification', value: 'ISO/IEC 17025' },
        { label: 'Traceability', value: 'NIST, PTB' },
        { label: 'Service Type', value: 'On-Site & Lab' },
        { label: 'Turnaround Time', value: '24-48 hours' },
        { label: 'Certificate Validity', value: '12 months' },
        { label: 'Equipment Types', value: 'All industrial equipment' },
        { label: 'Documentation', value: 'Digital & Paper' },
        { label: 'Support', value: 'Technical consultation included' },
    ],
    location: 'Nationwide Service',
};

const MOCK_PRODUCT_8: Products.Model.Product = {
    id: 'PRD-011',
    sku: 'ABC-12345-S-BL',
    name: 'PowerCharge Solutions™ – Battery & Charger Management for Manufacturing',
    description:
        '<p><strong>PowerCharge Solutions™</strong> offers comprehensive battery and charger management services for manufacturing operations. Our program ensures optimal battery performance, extends equipment uptime, and provides sustainable disposal solutions.</p><h3>Smart Diagnostics and Monitoring</h3><p>Our advanced diagnostic tools monitor battery health in real-time, identifying potential issues before they cause equipment downtime. The system provides detailed analytics and recommendations for optimal battery usage patterns.</p><p>Key features include:</p><ul><li>Smart Diagnostics</li><li>Sustainable Recycling</li><li>On-Demand Replacements</li><li>Battery health monitoring</li><li>Predictive maintenance alerts</li></ul><h3>Sustainability and Recycling</h3><p>We handle the complete lifecycle of your batteries, from initial deployment to end-of-life recycling. Our certified recycling program ensures environmentally responsible disposal while recovering valuable materials.</p>',
    shortDescription: 'Comprehensive battery and charger management with smart diagnostics',
    subtitle: 'Battery Management • Maintenance Services',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
        width: 640,
        height: 656,
        alt: 'PowerCharge Solutions™ – Battery & Charger Management for Manufacturing',
    },
    price: {
        value: 79.83,
        currency: 'EUR',
    },
    link: '/products/PRD-011',
    type: 'VIRTUAL',
    category: 'MAINTENANCE',
    tags: [
        {
            label: 'Promo',
            variant: 'destructive',
        },
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: 'Smart', icon: 'Zap' },
        { value: 'Recycling', icon: 'Recycle' },
        { value: '24/7', icon: 'Clock' },
    ],
    detailedSpecs: [
        { label: 'Battery Types', value: 'All industrial batteries' },
        { label: 'Diagnostic Frequency', value: 'Real-time monitoring' },
        { label: 'Replacement Time', value: '24-48 hours' },
        { label: 'Recycling Program', value: 'Certified & Compliant' },
        { label: 'Support', value: '24/7 technical support' },
        { label: 'Reporting', value: 'Monthly analytics dashboard' },
        { label: 'Warranty', value: '12 months on replacements' },
        { label: 'Coverage', value: 'Nationwide service' },
    ],
    location: 'Europe',
};

const MOCK_PRODUCT_9: Products.Model.Product = {
    id: 'PRD-012',
    sku: 'ABC-12345-S-BL',
    name: 'WeldGuard Safety™ – Protective Solutions for Welding Environments',
    description:
        '<p><strong>WeldGuard Safety™</strong> provides comprehensive safety solutions for welding operations, protecting workers from fumes, heat, and radiation hazards. Our integrated approach combines advanced extraction systems, personal protective equipment, and compliance verification.</p><h3>Advanced Fume Extraction</h3><p>Our high-efficiency fume extraction systems remove harmful welding fumes at the source, maintaining clean air quality in the workspace. The systems are designed for various welding processes and can be customized to your facility layout.</p><p>Key features include:</p><ul><li>Advanced Fume Extraction</li><li>Heat-Resistant PPE</li><li>Safety Compliance Checks</li><li>Source capture technology</li><li>Air quality monitoring</li></ul><h3>Personal Protective Equipment</h3><p>We provide certified heat-resistant personal protective equipment including welding helmets, protective clothing, and respiratory protection. All equipment meets or exceeds OSHA and international safety standards.</p>',
    shortDescription: 'Comprehensive safety solutions for welding environments',
    subtitle: 'Safety Solutions • Welding Protection',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-welding.jpg',
        width: 640,
        height: 656,
        alt: 'WeldGuard Safety™ – Protective Solutions for Welding Environments',
    },
    price: {
        value: 10,
        currency: 'USD',
    },
    link: '/products/PRD-012',
    type: 'VIRTUAL',
    category: 'SAFETY',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: 'OSHA', icon: 'Shield' },
        { value: 'Certified', icon: 'Award' },
        { value: 'Complete', icon: 'CheckCircle' },
    ],
    detailedSpecs: [
        { label: 'Fume Extraction', value: 'Source capture system' },
        { label: 'Air Flow Rate', value: 'Up to 2000 CFM' },
        { label: 'PPE Certification', value: 'ANSI, EN standards' },
        { label: 'Compliance', value: 'OSHA, NIOSH' },
        { label: 'Installation', value: 'Professional installation included' },
        { label: 'Maintenance', value: 'Scheduled service plans' },
        { label: 'Training', value: 'Safety training included' },
        { label: 'Support', value: '24/7 technical support' },
    ],
    location: 'Nationwide Service',
};

const MOCK_PRODUCT_10: Products.Model.Product = {
    id: 'PRD-013',
    sku: 'ABC-12345-S-BL',
    name: 'MaxFlow Air Systems™ – Industrial Pneumatics Maintenance & Optimization',
    description:
        '<p><strong>MaxFlow Air Systems™</strong> specializes in industrial pneumatics maintenance and optimization, helping facilities reduce energy costs while improving system reliability. Our comprehensive approach includes energy audits, custom solutions, and preventative maintenance programs.</p><h3>Energy Efficiency Audits</h3><p>Our certified technicians perform detailed energy audits of your compressed air systems, identifying leaks, inefficiencies, and optimization opportunities. The audit includes pressure mapping, flow analysis, and energy consumption measurement.</p><p>Key features include:</p><ul><li>Energy Efficiency Audits</li><li>Custom Airflow Solutions</li><li>Preventative Maintenance</li><li>Leak detection and repair</li><li>System optimization recommendations</li></ul><h3>Custom Solutions</h3><p>Based on audit findings, we design and implement custom airflow solutions tailored to your specific needs. This includes compressor upgrades, piping optimization, and control system improvements to maximize efficiency.</p>',
    shortDescription: 'Industrial pneumatics maintenance and energy optimization services',
    subtitle: 'Pneumatics Services • Energy Optimization',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-air.jpg',
        width: 640,
        height: 656,
        alt: 'MaxFlow Air Systems™ – Industrial Pneumatics Maintenance & Optimization',
    },
    price: {
        value: 19.99,
        currency: 'USD',
    },
    link: '/products/PRD-013',
    type: 'VIRTUAL',
    category: 'MAINTENANCE',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: 'Energy', icon: 'Zap' },
        { value: 'Optimization', icon: 'TrendingUp' },
        { value: 'Maintenance', icon: 'Wrench' },
    ],
    detailedSpecs: [
        { label: 'Audit Duration', value: '1-3 days' },
        { label: 'Energy Savings', value: 'Up to 30% reduction' },
        { label: 'System Types', value: 'All compressed air systems' },
        { label: 'Maintenance Frequency', value: 'Monthly, Quarterly, Annual' },
        { label: 'Response Time', value: '24-48 hours' },
        { label: 'Certification', value: 'ISO 9001 certified' },
        { label: 'Reporting', value: 'Detailed audit reports' },
        { label: 'Support', value: '24/7 emergency service' },
    ],
    location: 'Nationwide Service',
};

const MOCK_PRODUCT_11: Products.Model.Product = {
    id: 'PRD-014',
    sku: 'ABC-12345-S-BL',
    name: 'RapidFix Repair™ – Fast & Reliable Industrial Tool Repairs',
    description:
        '<p><strong>RapidFix Repair™</strong> provides fast and reliable repair services for industrial tools and equipment. Our certified technicians use genuine parts and manufacturer-approved procedures to restore your tools to optimal working condition.</p><h3>Express Repair Service</h3><p>Our express repair service ensures minimal downtime for your critical equipment. Most repairs are completed within 24-48 hours, with priority service available for urgent cases. We provide loaner equipment when available to keep your operations running.</p><p>Key features include:</p><ul><li>Express Repairs</li><li>Genuine Parts</li><li>Warranty Protection</li><li>24-48 hour turnaround</li><li>Loaner equipment program</li></ul><h3>Quality Assurance</h3><p>All repairs are performed by certified technicians using genuine manufacturer parts. Every repair includes a comprehensive quality check and comes with a warranty covering both parts and labor.</p>',
    shortDescription: 'Fast and reliable industrial tool repair service with genuine parts',
    subtitle: 'Repair Services • Tool Maintenance',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-repair.jpg',
        width: 640,
        height: 656,
        alt: 'RapidFix Repair™ – Fast & Reliable Industrial Tool Repairs',
    },
    price: {
        value: 19.99,
        currency: 'EUR',
    },
    link: '/products/PRD-014',
    type: 'VIRTUAL',
    category: 'MAINTENANCE',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
    keySpecs: [
        { value: 'Express', icon: 'Clock' },
        { value: 'Genuine', icon: 'CheckCircle' },
        { value: 'Warranty', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Turnaround Time', value: '24-48 hours' },
        { label: 'Parts', value: 'Genuine manufacturer parts' },
        { label: 'Warranty', value: '90 days parts & labor' },
        { label: 'Tool Types', value: 'All industrial tools' },
        { label: 'Service Type', value: 'On-Site & Service Center' },
        { label: 'Loaner Equipment', value: 'Available' },
        { label: 'Certification', value: 'Manufacturer certified' },
        { label: 'Support', value: '24/7 service hotline' },
    ],
    location: 'Europe',
};

const MOCK_PRODUCT_12: Products.Model.Product = {
    id: 'PRD-015',
    sku: 'PREMIUM-XL-2000',
    name: 'Premium Industrial Machine XL-2000',
    description:
        '<p>The <strong>XL-2000</strong> is a state-of-the-art industrial machine designed for maximum efficiency and durability. With advanced automation features and energy-saving technology, this machine is perfect for modern manufacturing facilities.</p><h3>Advanced Automation Capabilities</h3><p>The XL-2000 features a fully integrated automation system with intelligent control panel that provides real-time monitoring of all critical parameters.</p><p>Key features include:</p><ul><li>Programmable operating sequences with customizable presets</li><li>Automatic fault detection and diagnostic reporting</li><li>Remote monitoring via integrated IoT connectivity</li><li>Predictive maintenance alerts</li></ul><h3>Energy Efficiency</h3><p>With an exceptional energy efficiency rating of Class A++, the XL-2000 reduces energy consumption by up to 40% compared to traditional equipment. The low noise level of 65 dB ensures compliance with workplace safety regulations.</p><h3>Durability and Maintenance</h3><p>Designed for continuous operation in demanding environments, the XL-2000 features robust construction and modular design for easy maintenance access.</p><p>Maintenance highlights:</p><ul><li>Quick-access panels for major components</li><li>Tool-free access to frequently serviced parts</li><li>Comprehensive diagnostic system</li></ul>',
    shortDescription: 'State-of-the-art industrial machine with advanced automation and energy-saving technology',
    subtitle: 'Industrial Equipment • Manufacturing Solutions',
    image: {
        url: 'https://picsum.photos/1200/800',
        width: 1200,
        height: 800,
        alt: 'Premium Industrial Machine XL-2000',
    },
    images: [
        {
            url: 'https://picsum.photos/1200/800?random=1',
            alt: 'Industrial Machine Front View',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://picsum.photos/1200/800?random=2',
            alt: 'Industrial Machine Side View',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://picsum.photos/1200/800?random=3',
            alt: 'Industrial Machine Control Panel',
            width: 1200,
            height: 800,
        },
    ],
    price: {
        value: 125000,
        currency: 'USD',
    },
    link: '/products/PRD-015',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '2024', icon: 'Calendar' },
        { value: 'New', icon: 'CheckCircle' },
        { value: 'Electric', icon: 'Fuel' },
        { value: 'Automatic', icon: 'Settings' },
    ],
    detailedSpecs: [
        { label: 'Engine Power', value: '150 kW' },
        { label: 'Max Speed', value: '2800 RPM' },
        { label: 'Operating Voltage', value: '380-480V' },
        { label: 'Dimensions', value: '2500 x 1800 x 2200 mm' },
        { label: 'Weight', value: '3500 kg' },
        { label: 'Energy Efficiency', value: 'Class A++' },
        { label: 'Noise Level', value: '65 dB' },
        { label: 'Operating Temperature', value: '-10°C to +40°C' },
        { label: 'Protection Rating', value: 'IP54' },
        { label: 'Certification', value: 'CE, ISO 9001' },
    ],
    location: 'Chicago, IL',
};

const MOCK_PRODUCTS = [
    MOCK_PRODUCT_1,
    MOCK_PRODUCT_2,
    MOCK_PRODUCT_3,
    MOCK_PRODUCT_4,
    MOCK_PRODUCT_5,
    MOCK_PRODUCT_6,
    MOCK_PRODUCT_7,
    MOCK_PRODUCT_8,
    MOCK_PRODUCT_9,
    MOCK_PRODUCT_10,
    MOCK_PRODUCT_11,
    MOCK_PRODUCT_12,
];

export const mapProduct = (id: string): Products.Model.Product => {
    const product = MOCK_PRODUCTS.find((product) => product.id === id);
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    return product;
};

export const mapProducts = (options: Products.Request.GetProductListQuery): Products.Model.Products => {
    const { sort } = options;
    const filteredProducts = MOCK_PRODUCTS.filter((product) => {
        if (options.type && product.type !== options.type) {
            return false;
        }
        if (options.category && product.category !== options.category) {
            return false;
        }
        return true;
    });

    const data = [...filteredProducts];

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        data.sort((a, b) => {
            const aValue = a[field as keyof Products.Model.Product];
            const bValue = b[field as keyof Products.Model.Product];

            if (field === 'name') {
                const aField = a.name;
                const bField = b.name;
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (field === 'price') {
                const aPrice = a.price.value;
                const bPrice = b.price.value;
                return isAscending ? aPrice - bPrice : bPrice - aPrice;
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        data: data,
        total: data.length,
    };
};

export const mapRelatedProducts = (options: Products.Request.GetRelatedProductListParams): Products.Model.Products => {
    const { offset = 0, limit = 10, sort } = options;

    const products: Products.Model.Product[] = MOCK_PRODUCTS;

    if (!products.length) {
        return {
            data: [],
            total: 0,
        };
    }

    const data = products;

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        data.sort((a, b) => {
            const aValue = a[field as keyof Products.Model.Product];
            const bValue = b[field as keyof Products.Model.Product];

            if (field === 'name') {
                const aField = a.name;
                const bField = b.name;
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (field === 'price') {
                const aPrice = a.price.value;
                const bPrice = b.price.value;
                return isAscending ? aPrice - bPrice : bPrice - aPrice;
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        data: data.slice(Number(offset), Number(offset) + Number(limit)),
        total: data.length,
    };
};
