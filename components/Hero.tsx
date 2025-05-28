export default function Hero() {
    return (
      <section className="hero min-h-[60vh]" style={{backgroundImage: 'url(/bg-gradient.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Olá, sou o Ramon</h1>
            <p className="mb-5">Desenvolvedor Full Stack apaixonado por design e performance.</p>
            <a href="/sobre" className="btn btn-primary">Saiba Mais</a>
          </div>
        </div>
      </section>
    )
  }