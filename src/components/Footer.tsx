export function Footer() {
  return (
    <footer className="relative bg-ink text-paper py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <span className="smallcaps text-paper/50">365 Days · 365 Stories · One World</span>
          <h3 className="font-italiana text-[10vw] md:text-[10rem] leading-[0.85] tracking-[-0.035em]">
            AIME
          </h3>
          <p className="font-serif italic text-[1.4rem] md:text-[1.6rem] text-paper/70 max-w-2xl leading-[1.4]">
            The world of marriage, told one day at a time. From January first to December thirty-first, an editorial journey through cultures, traditions, places, and people.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-paper/15 pt-12">
          <div className="flex flex-col gap-2">
            <span className="micro text-paper/50">Issue</span>
            <span className="font-italiana text-[1.05rem]">2026</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="micro text-paper/50">Stories</span>
            <span className="font-italiana text-[1.05rem]">365</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="micro text-paper/50">Countries</span>
            <span className="font-italiana text-[1.05rem]">62</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="micro text-paper/50">Languages</span>
            <span className="font-italiana text-[1.05rem]">∞</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-paper/15 pt-12 smallcaps text-paper/60">
          <span>Editorial · Paris · Tokyo · New York</span>
          <span>Photographs · Field archive · 2024 — 2026</span>
          <span>© AIME Wedding World · Issue MMXXVI</span>
        </div>

        <div className="text-center pt-12 border-t border-paper/15">
          <span className="font-italiana text-[2rem] tracking-[0.32em] text-paper/40">
            A · I · M · E
          </span>
        </div>
      </div>
    </footer>
  );
}