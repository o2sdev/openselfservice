import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLE2_EN: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/help-and-support/safety/powerpro-tool-safety-guidelines',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'PowerPro Tool Safety Guidelines',
        lead: 'Discover essential safety practices to follow when using PowerPro tools to prevent accidents and ensure a safe working environment.',
        tags: ['safety', 'tools', 'guidelines'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Tool safety',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-safety-thumb.jpg',
            alt: 'Tool safety thumbnail',
        },
        category: {
            id: 'safety',
            title: 'Safety',
        },
        author: {
            name: 'Michael Johnson',
            position: 'Safety Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Introduction to Tool Safety',
                content:
                    'Safety should always be your top priority when working with power tools. This guide provides comprehensive safety guidelines for all PowerPro tools to help prevent accidents and injuries.',
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-07-15T10:30:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Safety equipment',
                },
                caption:
                    'Always use appropriate safety equipment including eye protection, hearing protection, and gloves when operating PowerPro tools.',
            },
            {
                id: 'sect-003-3',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Comprehensive Safety Guidelines',
                content: `# PowerPro Tool Safety Guidelines

Safety is paramount when working with power tools. This comprehensive guide outlines essential safety practices for using PowerPro tools to prevent accidents and create a safe working environment.

## General Safety Principles

These fundamental safety principles apply to all PowerPro tools and should be followed at all times:

### Personal Protective Equipment (PPE)

Always wear appropriate PPE when operating power tools:

1. **Eye Protection** - Safety glasses or goggles to protect from flying debris
2. **Hearing Protection** - Earplugs or earmuffs for loud tools
3. **Respiratory Protection** - Dust masks or respirators when working with materials that produce dust
4. **Hand Protection** - Gloves appropriate for the task (cut-resistant, impact-resistant, etc.)
5. **Foot Protection** - Steel-toed boots when working with heavy materials

> **Safety Alert:** Never compromise on safety equipment. Even brief exposure to hazards can cause permanent injury.

### Workspace Safety

Maintain a safe workspace to prevent accidents:

1. Keep work areas clean and well-lit
2. Remove clutter that could cause trips or falls
3. Secure loose materials and tools when not in use
4. Ensure proper ventilation, especially when working with chemicals
5. Have a first aid kit and fire extinguisher readily accessible

![Safe Workspace Setup](https://picsum.photos/800/400 "Example of a Safe Workspace")

## Power Tool General Safety

Before using any PowerPro power tool, follow these essential safety practices:

### Pre-Operation Checklist

<table>
  <thead>
    <tr>
      <th>Check Point</th>
      <th>Action Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>Tool Condition</td>
      <td data-highlighted>Inspect for damage, loose parts, or defects</td>
    </tr>
    <tr>
      <td>Power Source</td>
      <td>Ensure cords are undamaged and batteries are properly seated</td>
    </tr>
    <tr>
      <td>Guards & Safety Features</td>
      <td>Verify all guards are in place and functioning correctly</td>
    </tr>
    <tr>
      <td>Accessories & Bits</td>
      <td>Confirm they are appropriate for the task and securely attached</td>
    </tr>
    <tr>
      <td>Work Environment</td>
      <td>Check for hazards like flammable materials or wet conditions</td>
    </tr>
  </tbody>
</table>

### Safe Operation Practices

* **Maintain Proper Stance** - Keep balanced with both feet firmly on the ground
* **Use Both Hands** - Follow tool instructions for proper hand placement
* **Avoid Distractions** - Focus entirely on the task at hand
* **Never Disable Safety Features** - Guards and safety switches are there for protection
* **Follow Manufacturer Instructions** - Always operate tools as intended

## Tool-Specific Safety Guidelines

Different tools present unique safety challenges. Follow these specific guidelines for common PowerPro tools:

### Drill Safety

![Drill Safety](https://picsum.photos/800/500 "Proper Drill Handling")

When using PowerPro drills:

1. Secure workpieces with clamps or vises, never hold by hand
2. Use the appropriate bit for the material being drilled
3. Start drilling at low speed and gradually increase
4. Apply steady pressure; excessive force can cause bit breakage
5. Keep the drill perpendicular to the work surface when possible

### Saw Safety

Saws are among the most dangerous power tools. Follow these critical safety guidelines:

| Saw Type | Key Safety Practices | Common Hazards to Avoid |
|----------|---------------------|-------------------------|
| Circular Saw | Keep both hands on designated handles, never reach under material | Kickback, binding, exposed blade |
| Jigsaw | Allow blade to reach full speed before cutting, keep base plate flat | Blade breakage, unstable cutting |
| Reciprocating Saw | Secure workpiece firmly, be aware of hidden objects in cutting path | Unexpected movement, blade contact with utilities |
| Table Saw | Use push sticks for narrow cuts, stand to side of blade | Kickback, reaching over blade |

### Grinder Safety

Grinders operate at extremely high speeds and require special attention:

* **Proper Guard Position** - Always position the guard between you and the wheel
* **Correct Wheel Type** - Use only wheels rated for your grinder's RPM
* **Proper Startup** - Allow grinder to reach full speed before contacting work
* **Grinding Position** - Hold at a 15-30 degree angle to the work surface
* **Cool Down Period** - Let wheels cool naturally, never quench in water

## Electrical Safety

Electrical hazards are present in all power tools. Follow these guidelines to prevent shock and electrical fires:

### Cord and Outlet Safety

1. Inspect cords before each use for damage or fraying
2. Never carry tools by their cords or yank cords from outlets
3. Keep cords away from heat, oil, and sharp edges
4. Use GFCI-protected outlets when working in damp locations
5. Never use tools with damaged plugs or exposed wiring

### Battery Safety for Cordless Tools

* **Proper Charging** - Use only the manufacturer's recommended charger
* **Avoid Extreme Temperatures** - Don't charge or store batteries in very hot or cold conditions
* **Prevent Short Circuits** - Keep battery contacts away from metal objects
* **Proper Disposal** - Never dispose of batteries in regular trash or fire
* **Damage Inspection** - Don't use batteries that show signs of damage or leakage

## Emergency Procedures

Know what to do in case of an accident:

### Minor Injuries

For cuts, abrasions, or minor burns:

1. Stop work immediately
2. Clean the wound with soap and water
3. Apply appropriate first aid
4. Determine if professional medical attention is needed

### Serious Injuries

For severe bleeding, major burns, or electrical shock:

1. Call emergency services immediately
2. If electrical shock occurs, disconnect power source if safe to do so
3. Provide first aid according to training until help arrives
4. Do not move the injured person unless absolutely necessary

## Training and Certification

Proper training is essential for safe tool operation:

* **Read Manuals** - Always read and understand the tool manual before first use
* **Seek Instruction** - Take advantage of PowerPro's free safety training videos
* **Practice** - Start with simple projects to build skill and confidence
* **Stay Updated** - Regularly review safety guidelines and new recommendations
* **Certifications** - Consider professional certification for specialized tools

![Safety Training](https://picsum.photos/600/1200 "PowerPro Safety Training Session")

## Conclusion

Safety is not optional when working with power tools. By following these guidelines, you'll create a safer working environment and reduce the risk of accidents and injuries. Remember that most tool accidents are preventable with proper precautions and attention to safety.

For additional safety information or to report a safety concern with a PowerPro tool, contact our safety hotline at safety@powerprotools.com or call 1-800-SAFE-TOOL.`,
            },
        ],
    },
];

export const MOCK_ARTICLE2_DE: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/hilfe-und-support/sicherheit/powerpro-werkzeug-sicherheitsrichtlinien',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'PowerPro-Werkzeug-Sicherheitsrichtlinien',
        lead: 'Entdecken Sie wesentliche Sicherheitspraktiken, die bei der Verwendung von PowerPro-Werkzeugen zu befolgen sind, um Unfälle zu vermeiden und eine sichere Arbeitsumgebung zu gewährleisten.',
        tags: ['sicherheit', 'werkzeuge', 'richtlinien'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Werkzeugsicherheit',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-safety-thumb.jpg',
            alt: 'Werkzeugsicherheit-Thumbnail',
        },
        category: {
            id: 'safety',
            title: 'Sicherheit',
        },
        author: {
            name: 'Michael Johnson',
            position: 'Safety Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Einführung in die Werkzeugsicherheit',
                content:
                    'Sicherheit sollte immer Ihre oberste Priorität sein, wenn Sie mit Elektrowerkzeugen arbeiten. Dieser Leitfaden bietet umfassende Sicherheitsrichtlinien für alle PowerPro-Werkzeuge, um Unfälle und Verletzungen zu vermeiden.',
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-07-15T10:30:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Sicherheitsausrüstung',
                },
                caption:
                    'Verwenden Sie immer angemessene Sicherheitsausrüstung, einschließlich Augenschutz, Gehörschutz und Handschuhe, wenn Sie PowerPro-Werkzeuge bedienen.',
            },
        ],
    },
];

export const MOCK_ARTICLE2_PL: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/pomoc-i-wsparcie/bezpieczenstwo/wytyczne-bezpieczenstwa-narzedzi-powerpro',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'Wytyczne bezpieczeństwa narzędzi PowerPro',
        lead: 'Poznaj niezbędne praktyki bezpieczeństwa, których należy przestrzegać podczas korzystania z narzędzi PowerPro, aby zapobiec wypadkom i zapewnić bezpieczne środowisko pracy.',
        tags: ['bezpieczeństwo', 'narzędzia', 'wytyczne'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Bezpieczeństwo narzędzi',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-safety-thumb.jpg',
            alt: 'Miniatura bezpieczeństwa narzędzi',
        },
        category: {
            id: 'safety',
            title: 'Bezpieczeństwo',
        },
        author: {
            name: 'Michael Johnson',
            position: 'Safety Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Wprowadzenie do bezpieczeństwa narzędzi',
                content:
                    'Bezpieczeństwo powinno być zawsze najwyższym priorytetem podczas pracy z elektronarzędziami. Ten przewodnik zawiera kompleksowe wytyczne bezpieczeństwa dla wszystkich narzędzi PowerPro, aby pomóc zapobiegać wypadkom i obrażeniom.',
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-07-15T10:30:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Sprzęt ochronny',
                },
                caption:
                    'Zawsze używaj odpowiedniego sprzętu ochronnego, w tym ochrony oczu, ochrony słuchu i rękawic podczas obsługi narzędzi PowerPro.',
            },
        ],
    },
];
