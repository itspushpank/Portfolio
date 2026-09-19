IMPORTANT IMPLEMENTATION RULE:

Do not attempt to generate the entire visual experience as one monolithic component.

Build the site section-by-section with reusable React components.

First establish the design system:
- colors
- typography
- spacing
- glass material
- shadows
- border treatment
- animation timing

Then implement:
1. Navbar
2. Hero + 3D botanical scene
3. About
4. Journey
5. Skills
6. Projects Bento Grid
7. Contact
8. Footer

The 3D scene must be isolated from the rest of the application so it can be optimized or disabled independently.

Create a centralized configuration file for:
- personal information
- social links
- projects
- skills
- navigation

Do not hardcode the same information in multiple components.

Use placeholder assets where actual 3D flower/leaf assets are unavailable, but structure the code so they can easily be replaced with realistic GLTF/GLB models later.

Do not use fake GitHub projects. If GitHub API access is unavailable, create a projects.ts/projects.js data structure and clearly mark where GitHub repositories should be inserted.

Prioritize visual quality AND performance.

don't make every section green glass. Keep the glassmorphism relatively restrained and let realistic botanical objects + moonlight + deep green negative space carry the visual identity. which will make it feel much more premium and less like an "AI-generated glassmorphism website."