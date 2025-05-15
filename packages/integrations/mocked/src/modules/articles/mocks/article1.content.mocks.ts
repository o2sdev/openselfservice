import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLE1_EN: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/help-and-support/maintenance/powerpro-tool-maintenance-guide',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'PowerPro Tool Maintenance Guide',
        lead: 'Learn how to properly maintain your PowerPro tools to ensure optimal performance and longevity.',
        tags: ['maintenance', 'tools', 'guide'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Tool maintenance',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-maintenance-thumb.jpg',
            alt: 'Tool maintenance thumbnail',
        },
        category: {
            id: 'maintenance',
            title: 'Maintenance',
        },
        author: {
            name: 'Jane Doe',
            position: 'Technical Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Introduction to Tool Maintenance',
                content:
                    'Regular maintenance is essential for keeping your PowerPro tools in optimal condition. This guide will walk you through the best practices for maintaining different types of tools.',
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Tool maintenance kit',
                },
                caption:
                    'A comprehensive PowerPro maintenance kit contains everything you need to keep your tools in top condition.',
            },
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Detailed Maintenance Guide',
                content: `# PowerPro Tool Maintenance Guide

Welcome to our comprehensive guide on maintaining your PowerPro tools. Proper maintenance not only extends the life of your tools but also ensures they perform at their best when you need them most.

## Basic Maintenance Principles

Regardless of the specific tool, there are some universal maintenance principles that apply to all PowerPro equipment:

### Regular Cleaning

Keeping your tools clean is the foundation of good maintenance:

1. After each use, wipe down the exterior with a clean cloth
2. Remove any dust, debris, or moisture
3. Pay special attention to vents and moving parts
4. Use compressed air to clean hard-to-reach areas

> **Pro Tip:** Never use water directly on electrical components. Instead, use a slightly damp cloth or specialized electronic cleaning solutions.

### Proper Storage

How you store your tools significantly impacts their longevity:

1. Store tools in a dry, clean environment
2. Use the original cases when possible
3. Keep batteries separate from tools during long-term storage
4. Hang tools when appropriate to prevent damage

![Proper Tool Storage](https://picsum.photos/800/400 "Proper Tool Storage Example")

## Power Drill Maintenance

Power drills require specific maintenance to ensure smooth operation and longevity.

### Chuck Maintenance

The chuck is a critical component that needs regular attention:

1. Open the chuck fully and remove any debris
2. Apply a small amount of lubricant to the moving parts
3. Open and close the chuck several times to distribute the lubricant
4. Wipe away any excess

### Battery Care

For cordless drills, battery maintenance is essential:

* **Regular Charging** - Don't let batteries sit unused for months
* **Avoid Extreme Temperatures** - Store between 40°F and 80°F
* **Prevent Complete Discharge** - Recharge when you notice power decreasing
* **Clean Contacts** - Keep battery contacts clean with alcohol wipes

## Saw Maintenance

Saws have unique maintenance requirements due to their cutting mechanisms.

### Blade Care and Replacement

| Saw Type | Blade Inspection Frequency | Signs of Wear | Replacement Interval |
|----------|----------------------------|---------------|----------------------|
| Circular Saw | After every 8-10 hours of use | Chipped teeth, burning smell | 25-50 hours of use |
| Jigsaw | After every 5 hours of use | Bent blade, rough cuts | 15-20 hours of use |
| Reciprocating Saw | After every job | Discoloration, slow cutting | As needed |

### Guide Maintenance

<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>1</td>
      <td data-highlighted>Check guide alignment with a square tool</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Clean guide rails with a soft brush</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Apply appropriate lubricant to moving parts</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Test movement for smoothness</td>
    </tr>
  </tbody>
</table>

## Sanders and Grinders Maintenance

These tools generate significant dust and require special attention.

### Dust Collection System

![Dust Collection System](https://picsum.photos/800/500 "Dust Collection System")

Maintaining the dust collection system is crucial:

1. Empty dust collection bags or containers after each use
2. Clean filters regularly with compressed air
3. Check for tears or holes in collection bags
4. Ensure proper sealing between components

### Pad and Disc Maintenance

* **Inspect Regularly** - Look for tears, uneven wear, or hardening
* **Clean Between Grits** - When changing sandpaper grits, clean the pad thoroughly
* **Replace When Worn** - A worn pad can affect sanding quality and tool balance
* **Use Appropriate Pressure** - Excessive pressure wears pads faster

## Seasonal Maintenance Checklist

For tools that aren't used year-round, follow this seasonal maintenance checklist:

1. **Beginning of Season**
   * Check all moving parts for smooth operation
   * Inspect cords and plugs for damage
   * Test batteries and chargers
   * Verify all safety features are working

2. **End of Season**
   * Deep clean all tools
   * Apply rust preventative to metal parts
   * Fully charge batteries before storage
   * Store in a climate-controlled environment

## Troubleshooting Common Issues

### Motor Problems

If your tool's motor is running hot or making unusual noises:

* Clean all vents and airways
* Check for binding in moving parts
* Inspect brushes for wear (if applicable)
* Ensure proper lubrication

### Power Issues

For tools with inconsistent power:

* Check power source and connections
* Inspect cords for damage
* Test batteries in another tool
* Clean battery contacts

## Professional Maintenance Services

Some maintenance tasks are best left to professionals:

* **Annual Inspection** - Have your most-used tools professionally inspected yearly
* **Motor Rebuilding** - When performance decreases significantly
* **Precision Calibration** - For tools requiring exact measurements
* **Electrical Safety Testing** - Especially for older tools

![Professional Maintenance](https://picsum.photos/600/1200 "Professional Maintenance Service")

## Conclusion

Consistent maintenance of your PowerPro tools is an investment that pays dividends in performance and longevity. By following this guide, you'll ensure your tools are always ready when you need them and operating at peak efficiency.

For additional assistance with tool maintenance, contact our customer support team at support@powerprotools.com or call 1-800-POWERTOOLS.`,
            },
        ],
    },
];

export const MOCK_ARTICLE1_DE: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/hilfe-und-support/wartung/powerpro-werkzeug-wartungsanleitung',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'PowerPro-Werkzeug-Wartungsanleitung',
        lead: 'Erfahren Sie, wie Sie Ihre PowerPro-Werkzeuge richtig warten, um optimale Leistung und Langlebigkeit zu gewährleisten.',
        tags: ['wartung', 'werkzeuge', 'anleitung'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Werkzeugwartung',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-maintenance-thumb.jpg',
            alt: 'Werkzeugwartung-Thumbnail',
        },
        category: {
            id: 'maintenance',
            title: 'Wartung',
        },
        author: {
            name: 'Jane Doe',
            position: 'Technical Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Einführung in die Werkzeugwartung',
                content:
                    'Regelmäßige Wartung ist unerlässlich, um Ihre PowerPro-Werkzeuge in optimalem Zustand zu halten. Diese Anleitung führt Sie durch die besten Praktiken zur Wartung verschiedener Werkzeugtypen.',
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Werkzeugwartungsset',
                },
                caption:
                    'Ein umfassendes PowerPro-Wartungsset enthält alles, was Sie benötigen, um Ihre Werkzeuge in Top-Zustand zu halten.',
            },
        ],
    },
];

export const MOCK_ARTICLE1_PL: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/pomoc-i-wsparcie/konserwacja/przewodnik-konserwacji-narzedzi-powerpro',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Przewodnik konserwacji narzędzi PowerPro',
        lead: 'Dowiedz się, jak prawidłowo konserwować narzędzia PowerPro, aby zapewnić optymalną wydajność i trwałość.',
        tags: ['konserwacja', 'narzędzia', 'przewodnik'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Konserwacja narzędzi',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-maintenance-thumb.jpg',
            alt: 'Miniatura konserwacji narzędzi',
        },
        category: {
            id: 'maintenance',
            title: 'Konserwacja',
        },
        author: {
            name: 'Jane Doe',
            position: 'Technical Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Wprowadzenie do konserwacji narzędzi',
                content:
                    'Regularna konserwacja jest niezbędna do utrzymania narzędzi PowerPro w optymalnym stanie. Ten przewodnik przeprowadzi Cię przez najlepsze praktyki konserwacji różnych typów narzędzi.',
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Zestaw do konserwacji narzędzi',
                },
                caption:
                    'Kompleksowy zestaw do konserwacji PowerPro zawiera wszystko, czego potrzebujesz, aby utrzymać narzędzia w najlepszym stanie.',
            },
        ],
    },
];
