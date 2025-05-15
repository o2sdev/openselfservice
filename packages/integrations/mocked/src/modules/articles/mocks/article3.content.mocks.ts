import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLE3_EN: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/help-and-support/accessories/essential-powerpro-tool-accessories',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Essential PowerPro Tool Accessories',
        lead: 'Explore the wide range of accessories available for your PowerPro tools to enhance functionality, improve efficiency, and tackle specialized projects.',
        tags: ['accessories', 'tools', 'attachments'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Tool accessories',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-accessories-thumb.jpg',
            alt: 'Tool accessories thumbnail',
        },
        category: {
            id: 'accessories',
            title: 'Accessories',
        },
        author: {
            name: 'Charles Leclerc',
            position: 'Product Specialist',
            avatar: {
                url: 'https://example.com/images/user-004.jpg',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                __typename: 'ArticleSectionText',
                title: 'Introduction to PowerPro Accessories',
                content:
                    'The right accessories can transform your PowerPro tools, expanding their capabilities and allowing you to tackle a wider range of projects. This guide explores the essential accessories for every PowerPro tool owner.',
            },
            {
                id: 'sect-004-2',
                createdAt: '2023-08-20T12:15:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'PowerPro accessory kit',
                },
                caption:
                    'A comprehensive PowerPro accessory kit includes bits, blades, and attachments compatible with multiple tools in the PowerPro lineup.',
            },
            {
                id: 'sect-004-3',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                __typename: 'ArticleSectionText',
                title: 'Complete Accessories Guide',
                content: `# Essential PowerPro Tool Accessories

Maximize the potential of your PowerPro tools with the right accessories. This comprehensive guide will help you identify the most valuable attachments and add-ons for your specific needs and projects.

## Understanding PowerPro Accessory Compatibility

PowerPro designs accessories with cross-compatibility in mind, allowing you to use many attachments across different tools in the PowerPro ecosystem.

### The PowerPro Universal System

The PowerPro Universal System ensures compatibility across the product line:

1. **Color-Coding** - Accessories are color-coded to indicate compatibility
2. **Quick-Connect** - Universal quick-connect system for rapid accessory changes
3. **Cross-Platform Design** - Many accessories work with multiple tool types
4. **Backward Compatibility** - New accessories often work with older tool models

> **Pro Tip:** Look for the "Universal" symbol on PowerPro accessories to identify those that work with multiple tools in the lineup.

### Checking Compatibility

Before purchasing accessories, verify compatibility using one of these methods:

1. Check the compatibility chart on the accessory packaging
2. Use the PowerPro mobile app's accessory finder feature
3. Enter your tool's model number on the PowerPro website
4. Consult your tool's manual for recommended accessories

![Compatibility Chart](https://picsum.photos/800/400 "PowerPro Accessory Compatibility Chart")

## Drill and Driver Accessories

Expand your drilling and driving capabilities with these essential accessories:

### Drill Bit Sets

<table>
  <thead>
    <tr>
      <th>Bit Type</th>
      <th>Best For</th>
      <th>Features</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>TitaniumEdge™ Bits</td>
      <td data-highlighted>General purpose drilling in wood, metal, and plastic</td>
      <td data-highlighted>Titanium coating for extended life, reduced friction</td>
    </tr>
    <tr>
      <td>CarbideMaster™ Bits</td>
      <td>Masonry, concrete, and stone</td>
      <td>Carbide tips, reinforced shafts for high-impact drilling</td>
    </tr>
    <tr>
      <td>PrecisionPro™ Bits</td>
      <td>Fine woodworking and detailed projects</td>
      <td>Extra-sharp cutting edges, brad point design</td>
    </tr>
    <tr>
      <td>MetalMax™ Bits</td>
      <td>Hardened steel and metal drilling</td>
      <td>Cobalt-infused steel, split-point design to prevent walking</td>
    </tr>
  </tbody>
</table>

### Driver Bit Essentials

Every PowerPro owner should have these driver bits:

* **Security Bit Set** - For specialized screws and tamper-resistant fasteners
* **Impact-Ready Bits** - Specially hardened for use with impact drivers
* **Magnetic Bit Holders** - Keep screws in place for one-handed operation
* **Extended Reach Bits** - Access recessed fasteners in tight spaces
* **Torque-Control Bits** - Prevent stripping with controlled-torque design

### Specialty Attachments

![Drill Attachments](https://picsum.photos/800/500 "PowerPro Specialty Drill Attachments")

Transform your drill with these innovative attachments:

1. **Right Angle Attachment** - Drill in tight corners and confined spaces
2. **Flexible Shaft Extension** - Reach into narrow areas
3. **Dust Collection System** - Capture dust while drilling for cleaner operation
4. **Depth Stop Collar Set** - Control drilling depth for consistent results
5. **Hole Saw Kit** - Create precise large-diameter holes

## Saw Accessories and Blades

The right blade makes all the difference in cutting performance and results.

### Circular Saw Blades

| Blade Type | Tooth Count | Best Applications | Special Features |
|------------|-------------|-------------------|------------------|
| FineCut™ | 60-80 teeth | Finish carpentry, trim work | Precision ground teeth, stabilizer vents |
| RipMaster™ | 24 teeth | Ripping lumber, rough cuts | Reinforced teeth, anti-kickback design |
| MultiPurpose™ | 40 teeth | General woodworking | Combination tooth pattern, all-purpose use |
| MetalCut™ | 50-60 teeth | Cutting non-ferrous metals | Specialized tooth geometry, heat-resistant coating |

### Jigsaw Blades

Essential jigsaw blades for every toolkit:

* **Wood Cutting Set** - Various TPI options for different wood types
* **Metal Cutting Blades** - High TPI count for clean metal cuts
* **Scroll Cutting Blades** - Narrow blades for intricate curved cuts
* **Plunge Cut Blades** - Pointed tips for starting cuts in the middle of material
* **Flush Cut Blades** - For cutting flush against surfaces

### Reciprocating Saw Blades

Specialized blades for different reciprocating saw applications:

1. **Demolition Blades** - Extra thick for nail-embedded wood
2. **Pruning Blades** - Designed for cutting green wood and branches
3. **Metal Cutting Blades** - Fine teeth for clean cuts in various metals
4. **Plaster/Drywall Blades** - Designed to cut building materials without damage
5. **Long-Reach Blades** - Extended length for deep cutting applications

## Sander Accessories

Maximize your sanding efficiency with these essential accessories:

### Sandpaper Selection Guide

Different grits for different applications:

* **Coarse (40-60 grit)** - Rapid material removal, stripping paint
* **Medium (80-120 grit)** - General smoothing, removing planning marks
* **Fine (150-180 grit)** - Preparing for finishing, between-coat sanding
* **Very Fine (220+ grit)** - Final smoothing before finishing

### Specialty Sanding Accessories

![Sanding Accessories](https://picsum.photos/800/500 "PowerPro Sanding Accessories")

Enhance your sander's capabilities:

1. **Contour Sanding Grips** - Sand curved and irregular surfaces
2. **Dust Collection Bags** - Improved dust management for cleaner work
3. **Sanding Sponges** - Flexible sanding for contoured surfaces
4. **Detail Attachment Kit** - Reach into tight corners and small areas
5. **Polishing Pads** - Convert your sander to a polisher for finishing

## Router Accessories

Transform your router into a versatile woodworking station:

### Essential Router Bits

Every router owner should have these fundamental bits:

* **Straight Bits** - For grooves, dadoes, and rabbets
* **Roundover Bits** - Create rounded edges of various radii
* **Flush Trim Bits** - Trim material flush with a template
* **Chamfer Bits** - Create angled edges
* **Dovetail Bits** - For creating dovetail joints

### Router Tables and Guides

Enhance precision with these accessories:

1. **Compact Router Table** - Convert handheld router to stationary tool
2. **Edge Guide System** - Ensure straight, consistent cuts parallel to edges
3. **Template Guide Set** - Follow templates for repeated precise cuts
4. **Circle Cutting Jig** - Create perfect circles and arcs
5. **Dust Collection Port** - Capture router dust at the source

## Battery and Charging Accessories

Maximize runtime and convenience with these power accessories:

### Battery Options

PowerPro offers various battery configurations:

| Battery Type | Capacity | Best For | Charging Time |
|--------------|----------|----------|---------------|
| Standard | 2.0Ah | Light-duty, occasional use | 30 minutes |
| Extended | 4.0Ah | General purpose, regular use | 60 minutes |
| Professional | 6.0Ah | Heavy-duty, all-day use | 90 minutes |
| MAX Endurance | 8.0Ah | Continuous commercial applications | 120 minutes |

### Charging Solutions

* **Rapid Charger** - 50% faster charging than standard chargers
* **Multi-Port Charging Station** - Charge up to 6 batteries simultaneously
* **Vehicle Charger** - Charge batteries from 12V vehicle outlets
* **Solar Charging Kit** - Eco-friendly charging option for remote sites
* **Battery Diagnostic Tool** - Test and recondition PowerPro batteries

## Storage and Transport Solutions

Keep your tools and accessories organized and protected:

### Tool Storage Options

![Storage Systems](https://picsum.photos/600/1200 "PowerPro Storage Systems")

PowerPro offers a comprehensive storage system:

1. **Modular Tool Cases** - Stackable cases with customizable interiors
2. **Accessory Organizers** - Specialized storage for bits, blades, and small parts
3. **Rolling Tool Chest** - Mobile storage for multiple tools and accessories
4. **Job Site Tool Bag** - Durable fabric storage with multiple compartments
5. **Wall-Mount Storage System** - Save floor space with wall-mounted tool storage

### Custom Inserts and Dividers

Customize your storage with:

* **Foam Tool Inserts** - Custom-cut foam to secure and organize tools
* **Adjustable Dividers** - Create compartments of various sizes
* **Small Parts Organizers** - Keep screws, bits, and small accessories sorted
* **Battery Holders** - Dedicated storage for multiple batteries
* **Accessory Pouches** - Attach to cases for additional organized storage

## Specialty and Trade-Specific Accessories

PowerPro offers accessories designed for specific trades and applications:

### Woodworking Specialty Accessories

* **Doweling Jig Kit** - Create precise dowel joints
* **Mortising Attachment** - Cut square holes for mortise and tenon joinery
* **Wood Carving Set** - Specialized bits for decorative woodworking
* **Biscuit Joiner Attachment** - Create strong, aligned joints
* **Planer Attachment** - Convert your tool for surface planing

### Metalworking Accessories

1. **Metal Grinding Wheels** - Various grits for metal finishing
2. **Cut-Off Wheel Set** - For precise metal cutting
3. **Metal Polishing Kit** - Achieve mirror finishes on metal surfaces
4. **Magnetic Trays** - Keep metal parts and fasteners organized
5. **Heat Shield Attachment** - Protect tool and user during high-heat applications

## Conclusion

Investing in quality accessories for your PowerPro tools significantly expands their capabilities and allows you to tackle a wider range of projects with greater efficiency. Start with the essential accessories for your most-used tools, then gradually expand your collection as your projects require.

For personalized accessory recommendations based on your specific tools and projects, contact our customer support team at accessories@powerprotools.com or call 1-800-POWERTOOLS.`,
            },
        ],
    },
];

export const MOCK_ARTICLE3_DE: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/hilfe-und-support/zubehor/wesentliches-powerpro-werkzeugzubehor',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Wesentliches PowerPro-Werkzeugzubehör',
        lead: 'Entdecken Sie die breite Palette an Zubehör für Ihre PowerPro-Werkzeuge, um die Funktionalität zu erweitern, die Effizienz zu verbessern und spezialisierte Projekte anzugehen.',
        tags: ['zubehör', 'werkzeuge', 'aufsätze'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Werkzeugzubehör',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-accessories-thumb.jpg',
            alt: 'Werkzeugzubehör-Thumbnail',
        },
        category: {
            id: 'accessories',
            title: 'Zubehör',
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                __typename: 'ArticleSectionText',
                title: 'Einführung in PowerPro-Zubehör',
                content:
                    'Das richtige Zubehör kann Ihre PowerPro-Werkzeuge transformieren, ihre Fähigkeiten erweitern und Ihnen ermöglichen, eine breitere Palette von Projekten anzugehen. Dieser Leitfaden erkundet das wesentliche Zubehör für jeden PowerPro-Werkzeugbesitzer.',
            },
            {
                id: 'sect-004-2',
                createdAt: '2023-08-20T12:15:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'PowerPro-Zubehörset',
                },
                caption:
                    'Ein umfassendes PowerPro-Zubehörset enthält Bits, Klingen und Aufsätze, die mit mehreren Werkzeugen der PowerPro-Reihe kompatibel sind.',
            },
        ],
    },
];

export const MOCK_ARTICLE3_PL: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/pomoc-i-wsparcie/akcesoria/niezbedne-akcesoria-do-narzedzi-powerpro',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Niezbędne akcesoria do narzędzi PowerPro',
        lead: 'Poznaj szeroki zakres akcesoriów dostępnych do narzędzi PowerPro, które zwiększają funkcjonalność, poprawiają wydajność i umożliwiają realizację specjalistycznych projektów.',
        tags: ['akcesoria', 'narzędzia', 'przystawki'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Akcesoria do narzędzi',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-accessories-thumb.jpg',
            alt: 'Miniatura akcesoriów do narzędzi',
        },
        category: {
            id: 'accessories',
            title: 'Akcesoria',
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                __typename: 'ArticleSectionText',
                title: 'Wprowadzenie do akcesoriów PowerPro',
                content:
                    'Odpowiednie akcesoria mogą przekształcić Twoje narzędzia PowerPro, rozszerzając ich możliwości i pozwalając na realizację szerszego zakresu projektów. Ten przewodnik przedstawia niezbędne akcesoria dla każdego właściciela narzędzi PowerPro.',
            },
            {
                id: 'sect-004-2',
                createdAt: '2023-08-20T12:15:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Zestaw akcesoriów PowerPro',
                },
                caption:
                    'Kompleksowy zestaw akcesoriów PowerPro zawiera bity, ostrza i przystawki kompatybilne z wieloma narzędziami z linii PowerPro.',
            },
        ],
    },
];
