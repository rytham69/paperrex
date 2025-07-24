// products.js
import { nanoid } from 'nanoid';

const initialData = [
  {
    name: "PRX Official Match Jersey 2025/26 DinoGlitch",
    price: "4,800.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-Dinoglitch-front.jpg?v=1737727469&width=1080",
    description: `The Paper Rex™ DinoGlitch Jersey 2025/2026 – Prehistoric Drip Meets Digital Chaos

Looking for a jersey that screams “I’m built different… like, dinosaur-level different”? Meet the DinoGlitch Jersey, where prehistoric vibes and digital chaos collide to create a masterpiece of esports fashion. It’s bold, glitchy, and downright unstoppable – just like you.

We’ve leveled up the fit and quality this season, giving the jersey an upgraded cut for peak comfort and performance. Crafted with OBRE Teamware VAPORTEC 2.0, it’s light, breathable, and so comfy you’ll forget you’re wearing it… until someone points out how amazing it looks.

What makes it roar:

- OBRE Lumibrite™ ink technology: Adds a glitchy, 3D-like design that practically pops off your screen.
- A 3D chest patch: Features the PRX logo and founding year, proving you’re part of the squad.
- The latest sponsor logos: Because leveling up never stops (logos may vary as our partnerships evolve).

Heads-up:

- Custom name/number tags? Not available for this drop – sorry, it’s just that exclusive.
- Made with 100% Vaportec Polyester – breathable, durable, and perfect for battling sweaty matches or just looking amazing.

Slip into the DinoGlitch, unleash your inner apex predator, and show the world that style like this never goes extinct. 🦖✨`,
  },
 
  {
    name: "PRX 5th Anniversary Sticker Pack",
    price: "400.00",
    image: "https://shop.pprx.team/cdn/shop/files/PRX5-Stickers-mockup.jpg?v=1747112495&width=1080",
    description: ``,
  },
 

  {
    name: "PRX Official 5-Year Anniversary Edition Jersey",
    price: " 5,500.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-2025-PRX-OG-Match-Jersey-Front-WEB.jpg?v=1747418870&width=1080",
    description: `PRX Official 5-Year Anniversary Jersey

The OG jersey, back from 2020 with zero color nerfs.

Yup - same electric blue, same glitch-pink confetti. We didn’t dare mess with the palette that launched a thousand highlight reels. We just gave the fabric a 2025 upgrade and slapped on a birthday badge so everyone knows you’re wearing a piece of PRX history.

Why it still fries retinas (in a good way):

Color Throwback: the exact blue-and-pink combo that started it all. If it ain’t broke, don’t recolor it.
Limited “Level 5” Hem Tag: exclusive anniversary label on the bottom-left. Collectors, start sweating.
Upgraded Jacquard Weave Fabric: lighter, stretchier, and faster at wicking than you are at dodging flashes.

Throw it on, celebrate five years of (un)controlled chaos, and show the lobby you’ve been here since “gg ez” was fresh.`,
  },
 
  {
    name: "PRX 'Sign Me' Keychain",
    price: "1,100.00",
    image: "https://shop.pprx.team/cdn/shop/files/PRX5-Keychain-Mockup-Web-Ready.jpg?v=1750157420&width=1080",
    description: `Dangle your dream contract right where the scouts can see it.
This keychain pairs a mint-tinted acrylic tag - stamped PAPER REX SHOULD SIGN ME -with a midnight-blue paracord leash and powder-coated clip. Tough enough for travel days, flashy enough for LAN selfies.

Clip it to your backpack, keyboard case, or wrist and let the universe (and Paper Rex) know where you belong.`,
  },
 
 
  {
    name: "PRX Basic Black Hoodie",
    price: "4,800.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-PRX-Basics-2025-BlackHoodie-Front.jpg?v=1737726367&width=1080",
    description: `The PRX Basic Black Hoodie – Your Go-To for LANs, Late Nights & Questionable Weather

You show up to LAN, ready to pop off, and—boom—the AC is blasting like it’s the Ice Age. Step outside? Oh cool, now it’s monsoon season.

That’s why we brought back the PRX Basic Black Hoodie, now softer, cozier, and straight-up better than before. Whether you’re grinding ranked at 3AM, trying to recover from a heartbreak scrim, or just desperately searching for warmth, this hoodie’s got you covered.

Why this hoodie slaps:

- Softer fabric & better fit – Like a warm hug (except this one won’t third-party you).
- Thick, double-lined hood – Because LAN AC settings should be illegal.
- 3D holographic PRX logo – Just the right amount of flex.
- Rib-knit cuffs – No floppy sleeves messing up your aim.
- Front pouch pocket – Perfect for snacks, hand warmers, or your phone.

The PRX Basic Black Hoodie: Because the esports lifestyle is unpredictable, but at least your hoodie doesn’t have to be.`,
  },
 
  {
    name: "PRX Basic Black Tee",
    price: "2,400.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-PRX-Basics-2025-BlackPink-Front.jpg?v=1737727206&width=1080",
    description: `The PRX Basic Black Tee - Understated and Awesome

This is the shirt you’ll keep reaching for. Soft? Check. Fits right? Absolutely. Looks great? You bet Whether you’re chilling on the couch or running out the door, this tee is ready for whatever the day throws at you. 

What makes it awesome:

- Super comfortable from the start.
- Great fit—nothing weird or tight.
- Pairs with anything, anytime.
- Built tough to handle everyday wear.
- Simple and clean design.`,
  },
 
  {
    name: "PRX WGAMING™ DinoGlitch Lanyard",
    price: "700.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-prx-dinoglitch-lanyard-01.jpg?v=1739181528&width=1080",
    description: `Are you a true Paper Rex fan? Do you wake up every morning thinking, wow, I wish I had a ridiculously good-looking way to carry my keys? Well, buddy, do we have news for you.

Introducing the PRX WGAMING™ DinoGlitch Lanyard—now in the glorious, eye-melting 2025/26 DinoGlitch print! It’s got colors so bold they might just wake up your ancestors, and the iconic Paper Rex™ and WGAMING™ logos in crisp white, just to remind everyone that you’re part of the coolest cult—uh, team—around.

Whether you're securing your keys, your ID, or just flexing on people with superior taste, this lanyard has you covered. Get yours now before they glitch out of existence!

#WGAMING #TooDrippyToLose`,
  },
 
  {
    name: "PRX Flag",
    price: "2,100.00",
    image: "https://shop.pprx.team/cdn/shop/files/prx-flag-01_877c77b9-6dc1-48b3-ae31-3e6b46eb0239.jpg?v=1697616896&width=1080",
    description: `You've seen them waved at our watch parties, you've witnessed fans on the biggest stages from Copenhagen to LA waving them with pride!

The official PRX Flag is here! Let your friends know who you support and get your hands on the exclusive PRX checkered flag today!

Dimensions:
Width: 90cm
Length: 150cm
`,
  },
 
  {
    name: "PRX Basic White Tee",
    price: "2,400.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-PRX-Basics-2025-WhitePink-Front.jpg?v=1737727035&width=1080",
    description: `The PRX Basic White Tee - Understated and Awesome

This is the shirt you’ll keep reaching for. Soft? Check. Fits right? Absolutely. Looks great? You bet Whether you’re chilling on the couch or running out the door, this tee is ready for whatever the day throws at you. 

What makes it awesome:

- Super comfortable from the start.
- Great fit—nothing weird or tight.
- Pairs with anything, anytime.
- Built tough to handle everyday wear.
- Simple and clean design.`,
  },
 
  {
    name: "PRX Crop Jersey 2025/26 DinoGlitch",
    price: "4,800.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-Dinoglitch-Crop-front.jpg?v=1737727405&width=1080",
    description: `The Paper Rex™ DinoGlitch Crop Jersey – Prehistoric Drip, Now Cropped to Perfection

Who says esports jerseys can’t be bold, breathable, and a little bit fierce? Meet the DinoGlitch Crop Jersey, where prehistoric power meets digital chaos – now in a cropped silhouette that’s made for making statements. It’s sleek, stylish, and ready to turn heads, whether you’re gaming, flexing, or just vibing.

This season, we’ve leveled up the fit and quality – giving you an upgraded cut for maximum comfort, breathability, and that effortless, just-threw-this-on-and-look-amazing feel. Made with OBRE Teamware VAPORTEC 2.0, it’s lightweight and built for movement, so you can stay cool while serving looks.

What makes it roar:

- OBRE Lumibrite™ ink technology – A glitchy, 3D-like design that pops (literally).
- 3D chest patch – Featuring the PRX logo and founding year, so you’re repping with pride.
- The latest sponsor logos: Because leveling up never stops (logos may vary as our partnerships evolve).

Heads-up:

- Custom name/number tags? Not available for this drop – exclusivity looks good on you.
- Made with 100% Vaportec Polyester – breathable, durable, and ready for both high-energy plays and high-fashion moments.

It’s not just a jersey – it’s a statement. Throw on the DinoGlitch Crop Jersey, unleash your inner apex predator, and remind the world that style like this never goes extinct. 🦖✨`,
  },
 
  {
    name: "PRX Basic White Hoodie",
    price: "4,200.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-PRX-Basics-2025-WhiteHoodie-Front.jpg?v=1737726500&width=1080",
    description: `The PRX Basic White Hoodie – Your Go-To for LANs, Late Nights & Questionable Weather

You show up to LAN, ready to pop off, and—boom—the AC is blasting like it’s the Ice Age. Step outside? Oh cool, now it’s monsoon season.

That’s why we brought back the PRX Basic White Hoodie, now softer, cozier, and straight-up better than before. Whether you’re grinding ranked at 3AM, trying to recover from a heartbreak scrim, or just desperately searching for warmth, this hoodie’s got you covered.

Why this hoodie slaps:

- Softer fabric & better fit – Like a warm hug (except this one won’t third-party you).
- Thick, double-lined hood – Because LAN AC settings should be illegal.
- 3D holographic PRX logo – Just the right amount of flex.
- Rib-knit cuffs – No floppy sleeves messing up your aim.
- Front pouch pocket – Perfect for snacks, hand warmers, or your phone.

The PRX Basic White Hoodie: Because the esports lifestyle is unpredictable, but at least your hoodie doesn’t have to be.`,
  },
 
  {
    name: "PRX Seoul Mission Tee 2025 - Cloudcore White",
    price: "2,800.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-2025-PRX-SEOULV3-White-Tee-Front-Web-Ready.jpg?v=1747718083&width=1080",
    description: `PRX Seoul Mission Tee 2025 - Cloudcore White

The tee you’ll grab for every scrim-day sprint, city stroll, and post-match ramen raid. Cut roomy, drenched in that clean Cloudcore White, and stacked with subtle PRX flexes only die-hard fans will spot.

What makes it special?

All the right details, front and back: a tiny embroidered PRX logo floats on the chest while the back-neck print lists our VALORANT team's jersey numbers - your subtle invite into the Rex inner circle.

Seoul-mission patch: woven badge at the hem stamps the exact latitude-longitude of our 2025 VCT Pacific campaign. Think of it as a wearable boarding pass to the tour.

Couch-level cozy: soft cotton that stays smooth and holds its shape, wash after wash.`,
  },
 
  {
    name: "Pulsar PRX Edition Mouse Pad XL",
    price: "2,300.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-2025-PRX-x-Pulsar-Collab-Web-Mousepad-Front.jpg?v=1744860920&width=1080",
    description: `All New High Sensitivity Surface

Collaborating closely with the Pulsar R&D Team and the Paper Rex Art Department, we developed a new surface optimized for high-sensitivity gameplay. The heat-treated knitted poly fabric surface delivers low initial friction and consistent glide at medium speeds, while providing excellent stopping power for precise control.

Tightly woven micro-knit stitch is not higher than the surface to prevent irritation to wrists and not to block the motion when performing wide mouse movements. 360° anti-fray precision stitching ensure long-term use without deformation and degumming as well.

The PRX mousepad, created in collaboration with Team PRX, features a durable and non-slip natural rubber base that ensures the pad stays firmly in place during intense gameplay.`,
  },
 
  {
    name: "PRX Basic Night Beam Tee",
    price: " 2,400.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-Web-PRX-Basics-2025-BlackYellow-Front.jpg?v=1743479206&width=1080",
    description: `PRX Basic Night Beam Tee - Understated and Awesome

This is the shirt you’ll keep reaching for. Soft? Check. Fits right? Absolutely. Looks great? You bet Whether you’re chilling on the couch or running out the door, this tee is ready for whatever the day throws at you. 

What makes it awesome:

- Super comfortable from the start.
- Great fit—nothing weird or tight.
- Pairs with anything, anytime.
- Built tough to handle everyday wear.
- Simple and clean design.`,
  },
 
  {
    name: "PRX Basic Cobalt Spark Hoodie",
    price: "4,200.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-PRX-Basics-2025-NavyHoodie-Front.jpg?v=1737726925&width=1080",
    description: `The PRX Basic Cobalt Spark Hoodie – Your Go-To for LANs, Late Nights & Questionable Weather

You show up to LAN, ready to pop off, and—boom—the AC is blasting like it’s the Ice Age. Step outside? Oh cool, now it’s monsoon season.

That’s why we brought back the PRX Basic Cobalt Spark Hoodie, now softer, cozier, and straight-up better than before. Whether you’re grinding ranked at 3AM, trying to recover from a heartbreak scrim, or just desperately searching for warmth, this hoodie’s got you covered.

Why this hoodie slaps:

- Softer fabric & better fit – Like a warm hug (except this one won’t third-party you).
- Thick, double-lined hood – Because LAN AC settings should be illegal.
- 3D holographic PRX logo – Just the right amount of flex.
- Rib-knit cuffs – No floppy sleeves messing up your aim.
- Front pouch pocket – Perfect for snacks, hand warmers, or your phone.

The PRX Basic Cobalt Spark Hoodie: Because the esports lifestyle is unpredictable, but at least your hoodie doesn’t have to be.`,
  },
 
  {
    name: "PRX Seoul Mission Hoodie 2025 - Electric Grape",
    price: "6,200.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-2025-PRX-SEOULV3-Purple-Hoodie-Front-Web-Ready.jpg?v=1747718169&width=1080",
    description: `PRX Seoul Mission Hoodie 2025 – Electric Grape

Picture this: it’s 2 a.m. in Seoul, neon signs buzzing purple and pink as you weave through side streets on a mission for late-night BBQ. This oversized Electric Grape hoodie nails that vibe - loud enough to glow under city lights, subtle enough that only real PRX die-hards catch the details.

What makes it special?

Front, back & sleeve flexes: a tiny pink-stitched PRX logo sits on the chest, a bold Seoul-mission graphic lights up the back, and an embroidered coordinates patch rides shotgun on the left sleeve - your full-360 passport to the 2025 run.

Mission-grade comfort: thick, brushed-inside fleece feels like pulling on your favorite gaming blanket, yet holds shape after plenty of laundromat speedruns.

Ready for the grind: deep kangaroo pocket for hand-warmers (or energy bars), ribbed cuffs that don’t sag, and an oversized hood built to hide your headset hair.`,
  },

  {
    name: "PRX Basic Sage Leaf Tee",
    price: "2,400.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-PRX-Basics-2025-Bulbasaur-Front.jpg?v=1737726967&width=1080",
    description: `The PRX Basic Sage Leaf Tee - Add a Splash of Color

This is the shirt you’ll keep reaching for. Soft? Check. Fits right? Absolutely. Looks great? You bet Whether you’re chilling on the couch or running out the door, this tee is ready for whatever the day throws at you. 

What makes it awesome:

- Super comfortable from the start.
- Great fit—nothing weird or tight.
- Pairs with anything, anytime.
- Built tough to handle everyday wear.
- Simple and clean design.`,
  },
  {
    name: "Pulsar Pro Series - PRX Something Gaming Mousepad",
    price: "2,300.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-Pulsar-x-Something-pad-001.jpg?v=1733033886",
    description: `Upgrade your gaming setup with the PRX Something Gaming Mousepad, crafted in collaboration with Pulsar and Paper Rex’s Ilia “something” Petrov, one of the most precise players in VALORANT. This mousepad is built for gamers who demand top-tier performance. And it looks great, too!

The low-speed surface gives you perfect control for fast flicks and precise aim, while the durable organic latex base keeps it locked in place during intense matches. Its micro-stitched edges prevent fraying, so it’s ready for long hours of gameplay.

Whether you’re competing at the highest level or just playing for fun, this mousepad gives you the precision and durability to perform your best.
`,
  },
  {
    name: "PRX Seoul Mission Tee 2025 - Velocity Blue",
    price: "2,800.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-2025-PRX-SEOULV3-Blue-Tee-Front-Web-Ready.jpg?v=1747718039&width=1080",
    description: `PRX Seoul Mission Tee 2025 - Velocity Blue

The tee you’ll grab for every scrim-day sprint, street stroll, and late-night snack raid. Cut roomy, dyed in that punchy “neon-sky” blue, and loaded with quiet flexes only Paper Rex fans will clock.

What makes it special?

All the right details, front and back: a tiny embroidered PRX logo floats on the chest while the back-neck print lists our VALORANT team's jersey numbers - your subtle invite into the Rex inner circle.

Seoul-mission patch: woven badge at the hem stamps the exact latitude-longitude of our 2025 VCT Pacific campaign. Think of it as a wearable boarding pass to the tour.

Couch-level cozy: soft cotton that stays smooth and holds its shape, wash after wash.
`,
  },
  {
    name: "PRX Windbreaker",
    price: "6,900.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-PRX-Windbreaker-Flatlay-Front-Web-Ready.png?v=1749914051&width=1080",
    description: `Complete your fit with the new PRX Windbreaker!

Get ready to turn heads with the PRX Windbreaker, your new favorite jacket introduced in 2025! This stylish and practical windbreaker is designed to keep you cozy and dry through all kinds of weather - whether it’s a blustery day or a light drizzle. 

Its lightweight, breathable fabric means you can move freely without overheating, while the vibrant design adds a fun pop to any outfit. Perfect for outdoor adventures, casual hangouts, or just adding a sporty edge to your look, the PRX Windbreaker is the ultimate all-weather companion that completes your fit with flair and function.`,
  },
  {
    name: "PRX Ikebukuro Sticker Pack",
    price: "400.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH-Web-Ikebukuro-Stickers-Mockup.jpg?v=1743750022&width=1080",
    description: `Rexy the Dino just hit Tokyo and he’s splashing neon all over Ikebukuro. Crack open this pack of five Japan-inspired vinyl stickers and tag anything that needs a burst of Paper Rex attitude.`,
  },
  {
    name: "PULSAR eS ARM SLEEVE Short PRX Edition",
    price: "1,400.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-2025-PRX-x-Pulsar-Collab-Web-Arm-Sleeve-Short_56d39696-4446-4280-a8f9-faca4793f2db.jpg?v=1744861353&width=1080",
    description: `Introducing ES Gaming Arm Sleeve, designed for eSports professionals and enthusiasts.

It offers a comfortable fit with cooling fabric, excellent elasticity to reduce fatigue, and a high-strength band for enhanced focus. The seamless design provides durability and a soft feel while reducing friction on the table or mouse pad. It prevents sweat and impurities, absorbs sweat, and dries quickly, creating a pleasant and cool gaming environment. Elevate your gaming performance with the ultimate arm sleeve for comfort, performance, and durability.

- Provides a comfortable fit for professionals with a thin, cooling fabric material.
- Offers excellent elasticity to reduce fatigue during extended wear.
- Features a high-strength premium band to prevent slipping during use, allowing for enhanced focus on gameplay.
- Seamlessly finished with a seamless design, providing a soft and durable wearing experience.
- Reduces friction between the arm and the table or mouse pad, supporting consistent aiming ability and quick responses.
- Prevents mouse pad contamination from sweat and impurities.
- Absorbs sweat and dries quickly, supporting a pleasant and cool gaming environment.`,
  },
  {
    name: "PULSAR eS ARM SLEEVE Long PRX Edition",
    price: "1,400.00",
    image: "https://shop.pprx.team/cdn/shop/files/MERCH_-2025-PRX-x-Pulsar-Collab-Web-Arm-Sleeve-Long.jpg?v=1744861216&width=1080",
    description: `Introducing ES Gaming Arm Sleeve, designed for eSports professionals and enthusiasts.

It offers a comfortable fit with cooling fabric, excellent elasticity to reduce fatigue, and a high-strength band for enhanced focus. The seamless design provides durability and a soft feel while reducing friction on the table or mouse pad. It prevents sweat and impurities, absorbs sweat, and dries quickly, creating a pleasant and cool gaming environment. Elevate your gaming performance with the ultimate arm sleeve for comfort, performance, and durability.

- Provides a comfortable fit for professionals with a thin, cooling fabric material.
- Offers excellent elasticity to reduce fatigue during extended wear.
- Features a high-strength premium band to prevent slipping during use, allowing for enhanced focus on gameplay.
- Seamlessly finished with a seamless design, providing a soft and durable wearing experience.
- Reduces friction between the arm and the table or mouse pad, supporting consistent aiming ability and quick responses.
- Prevents mouse pad contamination from sweat and impurities.
- Absorbs sweat and dries quickly, supporting a pleasant and cool gaming environment.`,
  },
  {
    name: "PRX Basic Surf Teal Tee",
    price: "2,400.00",
    image: "https://shop.pprx.team/cdn/shop/files/WEB_-PRX-Basics-2025-Squirtle-Front.jpg?v=1737727262&width=1080",
    description: `The PRX Basic Surf Teal Tee - Add a Splash of Color

This is the shirt you’ll keep reaching for. Soft? Check. Fits right? Absolutely. Looks great? You bet Whether you’re chilling on the couch or running out the door, this tee is ready for whatever the day throws at you. 

What makes it awesome:

- Super comfortable from the start.
- Great fit—nothing weird or tight.
- Pairs with anything, anytime.
- Built tough to handle everyday wear.
- Simple and clean design.`,
  },
 

].map(initialData => ({...initialData,id: nanoid() }));

export default initialData;
