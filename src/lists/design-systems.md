# Design systems to reference

## List

| Name | URL | Stack | Strengths | Notes | Status |
|---|---|---|---|---|---|
| Material UI | https://mui.com/ | React | Broad component coverage, mature docs, theming | Useful benchmark for component API surface and accessibility patterns. Avoid copying visual style blindly. | queued |
| Radix UI | https://www.radix-ui.com/ | React | Accessibility, primitives, behavior contracts | Very useful for interaction patterns, composition, and state/data-attribute conventions. | queued |
| shadcn/ui | https://ui.shadcn.com/ | React + Tailwind | Practical app patterns, copy-paste components, Radix-based | Good reference for DX and Tailwind structure, but quality varies by component evolution. | queued |
| Chakra UI | https://www.chakra-ui.com/ | React | Consistent API design, theming, usability | Good source for prop naming and ergonomic component contracts. | queued |
| Mantine | https://mantine.dev/ | React | Wide surface area, hooks, strong docs | Useful for app-level patterns and rich component behavior. | queued |
| Ant Design | https://ant.design/ | React | Enterprise patterns, dense component coverage | Good for data-heavy UI references, less useful as a visual direction unless specifically desired. | queued |
| Headless UI | https://headlessui.com/ | React / Vue | Unstyled accessible primitives | Good behavior reference, especially when evaluating minimal abstraction. | queued |
| Base UI | https://base-ui.com/ | React | Headless modern primitives | Worth watching for API design and composability. | queued |
| Adobe Spectrum | https://spectrum.adobe.com/ | Cross-platform | Accessibility, design tokens, system rigor | Strong reference for design language governance and documentation structure. | queued |
| Carbon Design System | https://carbondesignsystem.com/ | Cross-platform | Enterprise system thinking, documentation | Useful for content design, usage guidance, and pattern docs. | queued |
| Polaris | https://polaris.shopify.com/ | React | Product UI patterns, guidelines, content clarity | Good benchmark for UX writing and admin/product workflows. | queued |
| Fluent 2 | https://fluent2.microsoft.design/ | Cross-platform | Large-scale system consistency | Useful for token systems and design guidance at scale. | queued |
| Primer | https://primer.style/ | React / CSS | Clear docs, practical product components | Good benchmark for GitHub-style density and documentation clarity. | queued |
| Helsinki Design System | https://hds.hel.fi/getting-started/ | React / Design system docs | Accessibility, civic design clarity, practical documentation | Strong local reference. Worth studying for documentation clarity, tokens, and public-sector UX constraints. | queued |
| Bulma | https://bulma.io/ | CSS framework | Simplicity, readable class model, low ceremony | Useful as a lightweight CSS reference, less useful for component behavior or accessibility contracts. | queued |
| Nordhealth Design System | https://nordhealth.design/ | React / Design system docs | Clean product UI, healthcare-oriented patterns, consistency | Worth reviewing for calm visual language and pragmatic product components. | queued |
| Spectrum Web Components | https://opensource.adobe.com/spectrum-web-components/ | Web Components | Standards-based components, Spectrum implementation details | Useful when comparing React-first systems with framework-agnostic delivery. | queued |
| Apple Human Interface Guidelines | https://developer.apple.com/design/ | Platform design guidance | Platform-native interaction patterns, motion, clarity | Not a component library, but essential for interaction, hierarchy, and platform conventions. | queued |

## Accessibility-first review shortlist

| Name | Why it belongs here | Priority |
|---|---|---|
| Helsinki Design System | Public-sector design system, accessibility is a core expectation, and you specifically called it out. | high |
| Radix UI | Strong accessibility primitives and behavior contracts. | high |
| Headless UI | Explicitly built around accessible interactive primitives. | high |
| Adobe Spectrum | Accessibility and system rigor are core selling points. | high |
| Spectrum Web Components | Spectrum implementation with standards-based components, useful for accessibility comparison. | high |
| Carbon Design System | Mature enterprise system with strong accessibility guidance. | high |
| GOV.UK Design System | One of the best references for accessible forms and service UX. | high |
| U.S. Web Design System | Accessibility and public-service usability are central. | high |
| Polaris | Strong product guidance and historically solid accessibility practices. | medium |
| Primer | Good documentation and practical accessibility patterns. | medium |
| Fluent 2 | Large-scale accessibility guidance and platform consistency. | medium |
| Material UI | Claims strong accessibility support, worth validating against implementation reality. | medium |
| Chakra UI | Markets accessibility heavily, good candidate to verify. | medium |
| Mantine | Good practical React system, worth checking how deep the accessibility guidance really goes. | medium |
| PatternFly | Enterprise/admin UI with accessibility emphasis. | medium |
| Twilio Paste | Strong accessibility and documentation reputation. | medium |

## Accessibility review matrix template

| System | URL | Accessibility claim | Keyboard | Focus mgmt | Screen readers | Contrast | Reduced motion | Forms/errors | Docs quality | Primitive vs consumer burden | Notes | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Helsinki Design System | https://hds.hel.fi/getting-started/ | pending | pending | pending | pending | pending | pending | pending | pending | pending | First review target. | pending |
| Radix UI | https://www.radix-ui.com/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Headless UI | https://headlessui.com/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Adobe Spectrum | https://spectrum.adobe.com/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Spectrum Web Components | https://opensource.adobe.com/spectrum-web-components/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Carbon Design System | https://carbondesignsystem.com/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| GOV.UK Design System | https://design-system.service.gov.uk/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| U.S. Web Design System | https://designsystem.digital.gov/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Polaris | https://polaris.shopify.com/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Primer | https://primer.style/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Fluent 2 | https://fluent2.microsoft.design/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Material UI | https://mui.com/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Chakra UI | https://www.chakra-ui.com/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Mantine | https://mantine.dev/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| PatternFly | https://www.patternfly.org/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |
| Twilio Paste | https://paste.twilio.design/ | pending | pending | pending | pending | pending | pending | pending | pending | pending |  | pending |

## Catalog imported from designsystems.surf

| Name | URL | Stack | Strengths | Notes | Status |
|---|---|---|---|---|---|
| Aalto University Design System | https://designsystems.surf/design-systems/aalto-university | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Adobe Spectrum | https://designsystems.surf/design-systems/adobe | Cross-platform | Catalog candidate | Directory entry, also tracked via primary docs above. | queued |
| Alaska Airlines Auro | https://designsystems.surf/design-systems/alaskaairlines | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Amazon Cloudscape | https://designsystems.surf/design-systems/amazon | React / Web | Enterprise product UI | Good candidate for dense app patterns and documentation review. | queued |
| Ant Group Ant Design | https://designsystems.surf/design-systems/ant-group | React | Catalog candidate | Directory entry, overlaps with primary Ant Design docs above. | queued |
| Apple HIG | https://designsystems.surf/design-systems/apple | Platform guidance | Catalog candidate | Directory entry, overlaps with primary Apple design docs above. | queued |
| Atlassian Design System | https://designsystems.surf/design-systems/atlassian | React / Web | Product patterns, documentation quality | Strong candidate for component docs and usage guidance. | queued |
| Audi Design System | https://designsystems.surf/design-systems/audi | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Australian Gov Agriculture | https://designsystems.surf/design-systems/australiangov | Government web | Public-service patterns | Candidate for accessibility and content clarity review. | queued |
| Aviva Design System | https://designsystems.surf/design-systems/aviva | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Basis Design System | https://designsystems.surf/design-systems/basis | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| BBC Design System | https://designsystems.surf/design-systems/bbc | Web | Editorial/product patterns | Worth checking for content-heavy interfaces. | queued |
| Biings Design System | https://designsystems.surf/design-systems/biings | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Brainly Pencil | https://designsystems.surf/design-systems/brainly | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Carrefour Marcel | https://designsystems.surf/design-systems/carrefour | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Cash App Design System | https://designsystems.surf/design-systems/cashapp | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Datadog Druids | https://designsystems.surf/design-systems/datadog | Unknown | Catalog candidate | Likely useful for observability/data UI patterns. | queued |
| Dell Design System | https://designsystems.surf/design-systems/dell | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Denmark Design System | https://designsystems.surf/design-systems/denmark | Government web | Public-sector rigor | Candidate for accessibility and governance patterns. | queued |
| Docplanner Watson | https://designsystems.surf/design-systems/docplanner | Unknown | Catalog candidate | Healthcare-ish product space, probably worth a look. | queued |
| eBay Evo | https://designsystems.surf/design-systems/ebay | Web | Commerce/product patterns | Worth checking for large-scale component coverage. | queued |
| Elastic Design System | https://designsystems.surf/design-systems/elastic | Web | Data-heavy UI | Good candidate for dashboards and complex controls. | queued |
| Elisa Design System | https://designsystems.surf/design-systems/elisa | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Esri Calcite | https://designsystems.surf/design-systems/esri | Web Components / Web | Mapping/data UI patterns | Good candidate for robust component APIs. | queued |
| General Electric Edison | https://designsystems.surf/design-systems/generalelectric | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| GitHub Primer | https://designsystems.surf/design-systems/github | React / CSS | Catalog candidate | Directory entry, overlaps with primary Primer docs above. | queued |
| GitLab Pajamas | https://designsystems.surf/design-systems/gitlab | Web | Product UI, docs | Strong candidate for practical product patterns. | queued |
| Google Material Design | https://designsystems.surf/design-systems/google | Cross-platform | Catalog candidate | Directory entry, overlaps with Material tracking above. | queued |
| GOV.UK Design System | https://designsystems.surf/design-systems/govuk | Web | Accessibility, content clarity | Extremely worth studying for forms and public-service UX. | queued |
| Helsinki Design System | https://designsystems.surf/design-systems/helsinki | Web | Catalog candidate | Directory entry, overlaps with primary HDS docs above. | queued |
| IBM Carbon | https://designsystems.surf/design-systems/ibm | Cross-platform | Catalog candidate | Directory entry, overlaps with primary Carbon docs above. | queued |
| Ideagen Helix | https://designsystems.surf/design-systems/ideagen | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| INPS Sirio | https://designsystems.surf/design-systems/inps | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Kajabi Sage | https://designsystems.surf/design-systems/kajabi | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Kiwicom Orbit | https://designsystems.surf/design-systems/kiwicom | Web | Travel/product patterns | Worth checking for booking and workflow UI. | queued |
| Lemon Squeezy Wedges | https://designsystems.surf/design-systems/lemon-squeezy | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Line Design System | https://designsystems.surf/design-systems/line | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| LocalTapiola Duet | https://designsystems.surf/design-systems/localtapiola | Unknown | Catalog candidate | Local ecosystem, worth a quick pass. | queued |
| Michelin Motion | https://designsystems.surf/design-systems/michelin | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Microsoft Fluent 2 | https://designsystems.surf/design-systems/microsoft | Cross-platform | Catalog candidate | Directory entry, overlaps with primary Fluent docs above. | queued |
| Monday.com Vibe | https://designsystems.surf/design-systems/mondaycom | Web | Work-management UI patterns | Good candidate for dense, collaborative app patterns. | queued |
| MongoDB LeafyGreen | https://designsystems.surf/design-systems/mongodb | React / Web | Developer-product UI | Worth checking for docs and devtool-adjacent UI. | queued |
| Morningstar Design System | https://designsystems.surf/design-systems/morningstar | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Motorway Highway Code | https://designsystems.surf/design-systems/motorway | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Mozilla Protocol | https://designsystems.surf/design-systems/mozilla | Web / CSS | Brand + content patterns | Good candidate for marketing/editorial systems. | queued |
| Nordhealth Design System | https://designsystems.surf/design-systems/nordhealth | Web | Catalog candidate | Directory entry, overlaps with primary Nordhealth docs above. | queued |
| NS Tractie | https://designsystems.surf/design-systems/ns-dutch-railways | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| NSW Design System | https://designsystems.surf/design-systems/nsw | Government web | Public-service patterns | Candidate for accessibility and documentation quality. | queued |
| NYS Design System | https://designsystems.surf/design-systems/nysds | Government web | Public-service patterns | Candidate for forms and content-heavy flows. | queued |
| Ontario Design System | https://designsystems.surf/design-systems/ontario | Government web | Public-service patterns | Candidate for accessibility and governance review. | queued |
| Orange Design System | https://designsystems.surf/design-systems/orange | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Palantir Blueprint | https://designsystems.surf/design-systems/palantir | React | Data-dense desktop-like UI | Useful for tables, filters, and power-user workflows. | queued |
| Pluralsight Design System | https://designsystems.surf/design-systems/pluralsight | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Porsche Design System | https://designsystems.surf/design-systems/porsche | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Power Playbook | https://designsystems.surf/design-systems/power | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Razorpay Blade | https://designsystems.surf/design-systems/razorpay | Web | Fintech/product UI | Good candidate for dashboards and payment flows. | queued |
| Red Hat PatternFly | https://designsystems.surf/design-systems/redhat | React / Web | Enterprise admin UI | Very worth tracking for tables, forms, and admin workflows. | queued |
| REI Cedar | https://designsystems.surf/design-systems/rei | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Salesforce Lightning | https://designsystems.surf/design-systems/salesforce | Web | Enterprise breadth | Strong benchmark for large-scale component ecosystems. | queued |
| Samsung One UI | https://designsystems.surf/design-systems/samsung | Platform guidance | Mobile UX patterns | Useful mostly as platform interaction reference. | queued |
| SAP Fiori | https://designsystems.surf/design-systems/sap | Web | Enterprise workflows | Worth reviewing for business app structure and semantics. | queued |
| Seek Braid | https://designsystems.surf/design-systems/seek | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Segment Evergreen | https://designsystems.surf/design-systems/segment | React | Product components | Useful historical reference for React component APIs. | queued |
| ServiceNow Horizon | https://designsystems.surf/design-systems/servicenow | Web | Enterprise product patterns | Candidate for admin/product complexity. | queued |
| Shopify Polaris | https://designsystems.surf/design-systems/shopify | React | Catalog candidate | Directory entry, overlaps with primary Polaris docs above. | queued |
| Sigma Design System | https://designsystems.surf/design-systems/sigma | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Skoda Flow | https://designsystems.surf/design-systems/skoda | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Sprout Social Seeds | https://designsystems.surf/design-systems/sproutsocial | Unknown | Catalog candidate | Probably useful for social/product dashboards. | queued |
| SumUp Circuit | https://designsystems.surf/design-systems/sumup | Unknown | Catalog candidate | Fintech-adjacent, probably worth a pass. | queued |
| Sunrise Solar | https://designsystems.surf/design-systems/sunrise | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Tailwind Framework | https://designsystems.surf/design-systems/tailwind | CSS / utility-first | Utility-first design language | More framework ecosystem reference than design system proper. | queued |
| Teamleader Ahoy | https://designsystems.surf/design-systems/teamleader | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Thumbtack Thumbprint | https://designsystems.surf/design-systems/thumbtack | Web | Product system candidate | Worth reviewing for marketplace/product UI. | queued |
| Twilio Paste | https://designsystems.surf/design-systems/twilio | React | Excellent docs, strong component system | Very worth studying for docs structure and accessibility. | queued |
| U.S. Web Design System | https://designsystems.surf/design-systems/uswds | Government web | Accessibility, governance, content | High-value reference for public-facing product work. | queued |
| UAE Design System | https://designsystems.surf/design-systems/uae | Government web | Public-service patterns | Candidate for documentation and system governance. | queued |
| Uber Base | https://designsystems.surf/design-systems/uber | Web | Product/system scale | Worth checking for tokens and primitives. | queued |
| Vercel Geist | https://designsystems.surf/design-systems/vercel | Web | Minimalist product language | Good reference for modern developer-tool aesthetics. | queued |
| Visa Design System | https://designsystems.surf/design-systems/visa | Web | Financial product consistency | Good candidate for forms and trust-oriented UI. | queued |
| VTS Terra | https://designsystems.surf/design-systems/vts | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Washington Post Design System | https://designsystems.surf/design-systems/washingtonpost | Web | Editorial/product patterns | Worth checking for newsroom/content surfaces. | queued |
| Wikimedia Codex | https://designsystems.surf/design-systems/wikimedia | Web | Documentation and knowledge-product UI | Good candidate for content-heavy interfaces. | queued |
| Wise Design System | https://designsystems.surf/design-systems/wise | Web | Fintech/product patterns | Worth reviewing for clean product UX. | queued |
| Wonderflow Wanda | https://designsystems.surf/design-systems/wonderflow | Unknown | Catalog candidate | From designsystems.surf directory. Review later. | queued |
| Workday Canvas | https://designsystems.surf/design-systems/workday | Web | Enterprise/product patterns | Strong candidate for large app ecosystems. | queued |
| WorkOS Radix | https://designsystems.surf/design-systems/workos | Web | Product system candidate | Not to be confused with Radix UI primitives. Review separately. | queued |
| Zendesk Garden | https://designsystems.surf/design-systems/zendesk | React / Web | Support/product UI patterns | Worth checking for business app components. | queued |
