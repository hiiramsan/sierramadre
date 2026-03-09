import React from 'react'

const HeroCard = () => {
    return (
        <div
            id="hero-card"
            className="absolute bottom-10 left-16 w-52 rounded-md overflow-hidden bg-[#0e0e0e]/90 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center px-6 py-8 gap-4 shadow-2xl"
        >
            <p className="font-serif-elegant text-white/50 text-sm leading-snug tracking-wide">
                This week's picks
                <br />
                by sommeliers
            </p>
            <h3 className="font-display text-white text-lg font-bold uppercase">SIERRA MADRE OCCIDENTAL</h3>

            <img src="/images/yes.png" alt="" />

            <div className="w-full border-t border-white/10 pt-3 flex flex-col gap-1">
                <p className="font-serif-elegant text-white/70 text-md tracking-wider">Yecora, Sonora</p>
            </div>
        </div>
    )
}

export default HeroCard
