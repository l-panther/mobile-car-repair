const base = import.meta.env.BASE_URL;

export const services = [
  {
    id: 'body-restoration',
    title: 'Body Restoration',
    desc: "Full restoration to bring your vehicle back to its original glory. Precision, quality and attention to detail.",
    icon: 'body',
    image: `${base}assets/images/services/body.jpg`,
  },
  {
    id: 'panel-respray',
    title: 'Panel Respray',
    desc: 'High-quality respray for individual panels or a full vehicle. Flawless finish with premium paints and materials.',
    icon: 'spray',
    image: `${base}assets/images/services/respray.jpg`,
  },
  {
    id: 'alloy-restoration',
    title: 'Alloy Restoration',
    desc: 'Curb damage, corrosion or wear? We restore your wheels to a factory finish — strong, smooth and stunning.',
    icon: 'wheel',
    image: `${base}assets/images/services/alloy.jpg`,
  },
  {
    id: 'custom-work',
    title: 'Custom Work',
    desc: 'From unique mods to bespoke wraps, we bring your vision to life. Custom solutions, tailored to you.',
    icon: 'wrench',
    image: `${base}assets/images/services/custom.jpg`,
  },
];

export const whyChooseUs = [
  {
    title: 'Skilled Technicians',
    desc: 'Experienced mobile repair specialists delivering high-quality bodywork, paint repairs and alloy restoration.',
    icon: 'shield',
  },
  {
    title: 'Honest Service',
    desc: 'Clear pricing, honest advice and workmanship you can trust. No hidden costs or unnecessary repairs.',
    icon: 'check-circle',
  },
  {
    title: 'Fast Turnaround',
    desc: 'Most repairs are completed at your home or workplace, saving you time while delivering a showroom-quality finish.',
    icon: 'clock',
  },
];

export const workItems = [
  {
    id: 'front-wing-dent',
    title: 'Front Wing Dent Repair',
    desc: 'Crease and scuffed paint across the front wing, repaired and resprayed to a factory-match finish — no visible join to the original panel.',
    color: '#2148A0',
  },
  {
    id: 'rear-bumper-scuff',
    title: 'Rear Bumper Scuff',
    desc: 'Deep scuff and cracked paint on the rear bumper corner from a low-speed knock, filled, primed and blended into the surrounding panel.',
    color: '#8A8F99',
  },
  {
    id: 'van-load-door',
    title: 'Van Load Door Repair',
    desc: 'Torn and dented load-door edge on a work van, straightened and refinished on site with minimal vehicle downtime.',
    color: '#D6D6D6',
  },
  {
    id: 'rear-quarter-scrape',
    title: 'Rear Quarter Panel Scrape',
    desc: 'Multi-point scrape down to bare metal along the rear quarter panel, treated, filled and resprayed in the original factory black.',
    color: '#111318',
  },
];

export const jobs = [
  {
    id: 1,
    title: 'Blue Wheel Arch Repair',
    images: [
      `${base}assets/images/jobs/job1/job-before.webp`,
      `${base}assets/images/jobs/job1/job-after.webp`
    ],
    modalImage: `${base}assets/images/jobs/job1/job.webp`,
    alt: 'Blue wheel arch repair before and after',

    vehicle: 'Ford Focus',
    repairTime: '1 Day',
    location: 'Rear Wheel Arch',
    repairType: 'Scratch & Paint Repair',
    finish: 'Factory Colour Match',

    description:
      'This vehicle suffered heavy scratches and paint damage around the rear wheel arch. The damaged area was carefully prepared, repaired and colour matched before being refinished and machine polished to restore the original appearance.',

    services:
      'Scratch removal, panel preparation, colour matching and paint refinishing.',

    work: [
      'Removed damaged paint',
      'Prepared affected panel',
      'Applied factory colour match',
      'Clear coat refinished',
      'Machine polished'
    ]
  },

  {
    id: 2,
    title: 'Hyundai Rear Bumper Repair',
    images: [
      `${base}assets/images/jobs/job2/job-before.webp`,
      `${base}assets/images/jobs/job2/job-after.webp`
    ],
    modalImage: `${base}assets/images/jobs/job2/job.webp`,
    alt: 'Grey Hyundai rear bumper repair before and after',

    vehicle: 'Hyundai i10',
    repairTime: '1 Day',
    location: 'Rear Bumper',
    repairType: 'Bumper Repair',
    finish: 'Factory Finish',

    description:
      'The rear bumper had sustained impact damage and distortion. The bumper was repaired, reshaped, prepared and refinished to restore its original appearance without requiring replacement.',

    services:
      'Bumper repair, dent removal, preparation and paint refinishing.',

    work: [
      'Repaired bumper damage',
      'Reshaped plastic',
      'Prepared surface',
      'Colour matched paint',
      'Machine polished'
    ]
  },

  {
    id: 3,
    title: 'Plastic Bumper Repair',
    images: [
      `${base}assets/images/jobs/job3/job-before.webp`,
      `${base}assets/images/jobs/job3/job-after.webp`
    ],
    modalImage: `${base}assets/images/jobs/job3/job.webp`,
    alt: 'Plastic bumper repair before and after',

    vehicle: 'Customer Vehicle',
    repairTime: 'Same Day',
    location: 'Front Bumper',
    repairType: 'Plastic Repair',
    finish: 'OEM Texture',

    description:
      'A damaged plastic bumper corner was repaired rather than replaced. The damaged section was rebuilt, reshaped and refinished to closely match the original texture and finish.',

    services:
      'Plastic repair, reinforcement, surface levelling and refinishing.',

    work: [
      'Plastic repaired',
      'Reinforced damaged section',
      'Reshaped bumper',
      'Restored surface texture',
      'Paint refinished'
    ]
  },

  {
    id: 4,
    title: 'Van Door Dent Repair',
    images: [
      `${base}assets/images/jobs/job4/job-before.webp`,
      `${base}assets/images/jobs/job4/job-after.webp`
    ],
    modalImage: `${base}assets/images/jobs/job4/job.webp`,
    alt: 'White van door dent repair before and after',

    vehicle: 'Renault Trafic',
    repairTime: '1 Day',
    location: 'Sliding Door',
    repairType: 'Dent Removal',
    finish: 'Colour Matched',

    description:
      'Multiple dents and creases around the sliding door were repaired before the panel was refinished using a carefully matched paint system to restore a factory-quality finish.',

    services:
      'Dent removal, panel preparation, colour matching and refinishing.',

    work: [
      'Removed dents',
      'Panel reshaped',
      'Prepared surface',
      'Colour matched',
      'Machine polished'
    ]
  },

  {
    id: 5,
    title: 'Rear Bumper Restoration',
    images: [
      `${base}assets/images/jobs/job5/job-before.webp`,
      `${base}assets/images/jobs/job5/job-after.webp`
    ],
    modalImage: `${base}assets/images/jobs/job5/job.webp`,
    alt: 'Rear bumper restoration before and after',

    vehicle: 'Customer Vehicle',
    repairTime: '1 Day',
    location: 'Rear Bumper',
    repairType: 'Plastic Reconstruction',
    finish: 'High Gloss Finish',

    description:
      'The rear bumper had significant cracking and impact damage. Rather than replacing the bumper, the damaged area was repaired, rebuilt and refinished to achieve a durable factory-style finish.',

    services:
      'Crack repair, reshaping, surface preparation and colour-matched refinishing.',

    work: [
      'Plastic crack repaired',
      'Damaged area rebuilt',
      'Surface prepared',
      'Colour matched',
      'High-gloss finish applied'
    ]
  }
];
