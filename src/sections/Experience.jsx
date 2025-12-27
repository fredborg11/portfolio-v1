import React, { useState } from 'react'

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null)

  const jobs = [
    {
      title: "Senior Art Director",
      company: "Lynge Olsen Group",
      year: "2022 –",
      description:
        "Kreativ leder med ansvar for udvikling og eksekvering af visuelle identiteter, UI/UX-design og emballageprojekter på tværs af forskellige brands og platforme. Jeg sætter den visuelle retning fra idé til endelig løsning, træffer centrale designvalg og argumenterer sikkert for dem overfor interne teams og beslutningstagere. Jeg leder til dagligt et mindre designteam bestående af grafikere, hvor jeg fordeler opgaver, sikrer flow og holder kvaliteten høj gennem faglig sparring og tydelig retning. Rollen inkluderer desuden mentoring af en kollega og medansvar for at sikre, at teamet udvikler sig fagligt og arbejder effektivt. Min styrke som senior ligger i min erfaring, mit overblik og min ro — selv under pres. Jeg håndterer mange sideløbende projekter uden at miste retningen, er tryg i ansvar og trives med at drive processer fremad fra strategi til visuel implementering."
    },
    {
      title: "Junior Art Director",
      company: "Lynge Olsen Group",
      year: "2018 – 2022",
      description:
        "Ansvarlig for udvikling og produktion af grafiske løsninger inden for branding, digital design, UI/UX og emballageopgaver. Jeg omsatte kreative koncepter til konkrete visuelle leverancer og arbejdede tæt på Art Director og projektledere for at sikre konsistente, detaljerige og brandfokuserede designs. I rollen lærte jeg at balancere kreativ kvalitet med tidsstyring, og jeg tog gradvist mere ansvar for at definere visuelle løsninger selvstændigt. Jeg bidrog aktivt i idéudvikling, skitsering, prototyper og designvalg, og var ofte involveret i projekter fra koncept til færdigt resultat. Som junior var min styrke især, at jeg hurtigt kunne eksekvere, holde kvaliteten høj og tage ansvar for egne leverancer — hvilket lagde fundamentet for min senere seniorrolle."
    },
    {
      title: "Mediegrafiker-elev",
      company: "Lynge Olsen Group",
      year: "2014 – 2018",
      description:
        "Elev med tidligt ansvar og direkte involvering i professionelle projekter fra en tidlig fase af min uddannelse. Jeg arbejdede hands-on med grafisk produktion, layout, billedbehandling, identitetsarbejde og digitalt design, og fik løbende større ansvar i takt med min udvikling. Jeg lærte hele den grafiske proces fra idé til tryk og digital publicering, og fik erfaring med kundekontakt, projektflow og prioritering af tidskritiske leverancer. Min evne til at tage ansvar, levere kvalitet og holde overblikket førte til, at jeg efter endt uddannelse blev tilbudt ansættelse som Art Director i samme virksomhed. Rollen formede min arbejdsstil: rolig, engageret, nysgerrig — og altid parat til at smøge ærmerne op og skabe løsninger i praksis, ikke kun på papiret."
    },
    {
      title: "Inside Sales Representative",
      company: "Callaway Golf, London",
      year: "2012 - 2014",
      description:
        "Ansvarlig for kundeservice, intern salgskoordinering og ordreflow i en international virksomhed inden for sport og udstyr. Rollen krævede stærk struktur, overblik og professionel kommunikation på tværs af sprog og kulturer. Jeg havde daglig kontakt med kunder og interne teams, håndterede ordrebehandling og sikrede, at leverancer blev koordineret korrekt og rettidigt. Arbejdet lærte mig at navigere selvstændigt, tage ansvar og kommunikere klart — kompetencer jeg siden har taget med mig ind i den kreative branche. Samlet gav denne rolle mig et solidt fundament i service, struktur og samarbejde, som har styrket mig som designer og leder i mit senere arbejde."
    }
  ]

  const toggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <section id="experience" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-offWhiteCV text-blackCV">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* --- TITLE --- */}
        <h2 className="text-sm font-extrabold uppercase">
          Erhvervserfaring
        </h2>

        {/* --- JOBS (EXPANDABLE) --- */}
        <ul className="space-y-4">
          {jobs.map((job, index) => (
            <li key={index} className="border-b border-blackCV/20 pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                  <span className="font-semibold text-lg">{job.title}</span>
                  <span className="text-blackCV/60">{job.company}</span>
                  <span className="text-blackCV/40 text-sm">{job.year}</span>
                </div>
                <span
                  className={`text-xl font-bold transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="mt-3 text-blackCV/80 text-sm leading-relaxed">
                  {job.description}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* --- SIGNATURE SECTION --- */}
        <div className="pt-16">
          <h3 className="text-sm font-extrabold uppercase mb-6">
            Frivilligt arbejde & fritidsengagement
          </h3>

          <div className="space-y-10 text-blackCV/80 leading-relaxed text-sm">

            <div>
              <p className="italic font-medium text-blackCV">Udvalgsformand, Sportsafdelingen — Holbæk Golfklub</p>
              <p className="mt-2">
                Jeg bruger min erfaring, struktur og energi til at styrke klubbens sportslige miljø og fællesskab.
                Rollen giver mig mulighed for at løfte andre, bidrage til retning og arbejde med ledelse uden titel —
                kompetencer jeg bringer direkte i spil i mit professionelle arbejde som designer og kreativ leder.
              </p>
            </div>

            <div>
              <p className="italic font-medium text-blackCV">Golf, ski & løb</p>
              <p className="mt-2">
                Sport er min måde at bevare ro, fokus og energi — også i pressede perioder. Golf forstærker min
                strategiske tænkning, ski giver mig flow og frihed, og løb holder mig mentalt klar og i balance.
                Aktivt overskud jeg bringer ind i mit kreative arbejde og min tilgang til teams.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
