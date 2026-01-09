import { Products } from '@o2s/framework/modules';

export const MOCK_PRODUCTS: Products.Model.Product[] = [
    {
        id: 'PRD-004',
        sku: 'ABC-12345-S-BL',
        name: 'Rotary Hammer',
        description: `<h2>Detailed description</h2>
<p>The PrecisionCut Laser TS1 Cutter is a state-of-the-art laser cutting system engineered for high-accuracy material processing across a wide range of industries. Designed with advanced laser technology and precision control systems, the TS1 delivers clean, intricate cuts with exceptional speed and reliability.</p>

<ul>
    <li>Advanced CO₂ or Fiber Laser Technology</li>
    <li>Intuitive Touchscreen Interface</li>
    <li>Customizable Cutting Parameters</li>
    <li>Integrated Safety Features</li>
    <li>24/7 Operation Capability</li>
</ul>

<p>Whether you're working with metals, plastics, wood, or composite materials, the TS1 offers unmatched performance for both prototyping and high-volume production. Equipped with a powerful CO₂ or fiber laser (depending on configuration), the TS1 ensures minimal heat distortion and superior edge quality.</p>

<p>Its intuitive touchscreen interface, combined with customizable cutting parameters and integrated safety features, make it ideal for professionals in manufacturing, design, architecture, signage, and beyond. The TS1 supports a variety of file formats and works seamlessly with leading CAD/CAM software, streamlining workflow from concept to completion.</p>

<p>Durable, compact, and built for 24/7 operation, the PrecisionCut Laser TS1 Cutter is the perfect solution for businesses and creators who demand precision, efficiency, and reliability in every cut.</p>`,
        shortDescription: 'Professional heavy-duty hammer drill for concrete and masonry',
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
    },
    {
        id: 'PRD-005',
        sku: 'ABC-12345-S-BL',
        name: 'Cordless Angle Grinder',
        description: `<h2>Detailed description</h2>
<p>The PrecisionCut Laser TS2 Cutter represents the next evolution in laser cutting technology, offering enhanced precision and versatility for modern manufacturing needs. This advanced system combines cutting-edge laser technology with intelligent control systems to deliver exceptional cutting quality and operational efficiency.</p>

<ul>
    <li>Dual-Laser System (CO₂ + Fiber)</li>
    <li>Smart Control Interface</li>
    <li>Automated Material Detection</li>
    <li>Advanced Cooling System</li>
    <li>Cloud-Based Monitoring</li>
</ul>`,
        shortDescription: 'Cordless angle grinder with 22V battery platform',
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
    },
    {
        id: 'PRD-006',
        sku: 'ABC-12345-S-BL',
        name: 'Laser Measurement',
        description: `<h2>Detailed description</h2>
<p>The PrecisionCut Laser TS2 Cutter represents the next evolution in laser cutting technology, offering enhanced precision and versatility for modern manufacturing needs. This advanced system combines cutting-edge laser technology with intelligent control systems to deliver exceptional cutting quality and operational efficiency.</p>

<ul>
    <li>Dual-Laser System (CO₂ + Fiber)</li>
    <li>Smart Control Interface</li>
    <li>Automated Material Detection</li>
    <li>Advanced Cooling System</li>
    <li>Cloud-Based Monitoring</li>
</ul>

<p>Engineered for maximum versatility, the TS2 excels in processing a diverse range of materials including specialized alloys, advanced composites, and delicate substrates. The dual-laser system allows for optimal processing of both reflective and non-reflective materials, while maintaining superior edge quality and minimal thermal impact.</p>

<p>The smart control interface features AI-powered optimization algorithms that automatically adjust cutting parameters based on material properties and desired outcomes. Integrated sensors and real-time monitoring systems ensure consistent quality and prevent material waste, while the advanced cooling system maintains optimal operating temperatures for extended production runs.</p>

<p>With cloud-based monitoring and remote operation capabilities, the TS2 enables seamless integration into modern manufacturing workflows. Regular software updates and a comprehensive support network ensure your investment remains at the forefront of laser cutting technology, delivering exceptional results for years to come.</p>`,
        shortDescription: 'Laser measurement device for distance measurements',
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
    },
    {
        id: 'PRD-007',
        sku: 'ABC-12345-S-BL',
        name: 'Cordless Drill Driver',
        description: `<h2>Detailed description</h2>
<p>The PrecisionCut Laser TS2 Cutter represents the next evolution in laser cutting technology, offering enhanced precision and versatility for modern manufacturing needs. This advanced system combines cutting-edge laser technology with intelligent control systems to deliver exceptional cutting quality and operational efficiency.</p>

<ul>
    <li>Dual-Laser System (CO₂ + Fiber)</li>
    <li>Smart Control Interface</li>
    <li>Automated Material Detection</li>
    <li>Advanced Cooling System</li>
    <li>Cloud-Based Monitoring</li>
</ul>

<p>Engineered for maximum versatility, the TS2 excels in processing a diverse range of materials including specialized alloys, advanced composites, and delicate substrates. The dual-laser system allows for optimal processing of both reflective and non-reflective materials, while maintaining superior edge quality and minimal thermal impact.</p>

<p>The smart control interface features AI-powered optimization algorithms that automatically adjust cutting parameters based on material properties and desired outcomes. Integrated sensors and real-time monitoring systems ensure consistent quality and prevent material waste, while the advanced cooling system maintains optimal operating temperatures for extended production runs.</p>

<p>With cloud-based monitoring and remote operation capabilities, the TS2 enables seamless integration into modern manufacturing workflows. Regular software updates and a comprehensive support network ensure your investment remains at the forefront of laser cutting technology, delivering exceptional results for years to come.</p>`,
        shortDescription: 'Cordless drill driver with 22V battery platform',
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
    },
    {
        id: 'PRD-008',
        sku: 'ABC-12345-S-BL',
        name: 'Engineering Software',
        description: 'Advanced software for construction engineering calculations',
        shortDescription: 'Advanced software for construction engineering calculations',
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
    },
    {
        id: 'PRD-009',
        sku: 'ABC-12345-S-BL',
        name: 'RentPro Industrial™ – Flexible Equipment Rental Solutions',
        description:
            '<ul><li>Short & Long-Term Rentals</li><li>Wide Equipment Selection</li><li>Maintenance & Support Included</li></ul>',
        shortDescription:
            '<ul><li>Short & Long-Term Rentals</li><li>Wide Equipment Selection</li><li>Maintenance & Support Included</li></ul>',
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
    },
    {
        id: 'PRD-010',
        sku: 'ABC-12345-S-BL',
        name: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
        description:
            '<ul><li>ISO-Certified Calibration</li><li>On-Site & Remote Services</li><li>Detailed Reports</li></ul>',
        shortDescription:
            '<ul><li>ISO-Certified Calibration</li><li>On-Site & Remote Services</li><li>Detailed Reports</li></ul>',
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
    },
    {
        id: 'PRD-011',
        sku: 'ABC-12345-S-BL',
        name: 'PowerCharge Solutions™ – Battery & Charger Management for Manufacturing',
        description: '<ul><li>Smart Diagnostics</li><li>Sustainable Recycling</li><li>On-Demand Replacements</li></ul>',
        shortDescription:
            '<ul><li>Smart Diagnostics</li><li>Sustainable Recycling</li><li>On-Demand Replacements</li></ul>',
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
    },
    {
        id: 'PRD-012',
        sku: 'ABC-12345-S-BL',
        name: 'WeldGuard Safety™ – Protective Solutions for Welding Environments',
        description:
            '<ul><li>Advanced Fume Extraction</li><li>Heat-Resistant PPE</li><li>Safety Compliance Checks</li></ul>',
        shortDescription:
            '<ul><li>Advanced Fume Extraction</li><li>Heat-Resistant PPE</li><li>Safety Compliance Checks</li></ul>',
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
    },
    {
        id: 'PRD-013',
        sku: 'ABC-12345-S-BL',
        name: 'MaxFlow Air Systems™ – Industrial Pneumatics Maintenance & Optimization',
        description:
            '<ul><li>Energy Efficiency Audits</li><li>Custom Airflow Solutions</li><li>Preventative Maintenance</li></ul>',
        shortDescription:
            '<ul><li>Energy Efficiency Audits</li><li>Custom Airflow Solutions</li><li>Preventative Maintenance</li></ul>',
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
    },
    {
        id: 'PRD-014',
        sku: 'ABC-12345-S-BL',
        name: 'RapidFix Repair™ – Fast & Reliable Industrial Tool Repairs',
        description:
            '<h2>RapidFix Repair™ – Fast & Reliable Industrial Tool Repairs</h2><ul><li>Express Repairs</li><li>Genuine Parts</li><li>Warranty Protection</li></ul>',
        shortDescription: '<ul><li>Express Repairs</li><li>Genuine Parts</li><li>Warranty Protection</li></ul>',
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
    },
];
