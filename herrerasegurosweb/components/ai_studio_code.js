import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Más que un seguro, una promesa de respaldo</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Conozca la diferencia de tener un asesor de confianza a su lado.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative order-last md:order-first">
             <div className="absolute inset-0 bg-blue-200 rounded-full transform -rotate-6 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=75" 
              alt="Un asesor de Herrera Seguros en una oficina profesional, demostrando confianza y compromiso" 
              className="rounded-full shadow-xl relative w-full h-auto max-w-md mx-auto aspect-square object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Soy José Miguel Herrera, su asesor personal</h3>
            <p className="text-slate-600 mb-4 text-justify">
              En Herrera Seguros, llevamos trabajando en el sector asegurador desde 1984. Con más de 40 años de experiencia, mi misión es proteger a familias y empresas como la suya, ofreciendo no solo una póliza, sino una relación de confianza y respaldo duradero.
            </p>
            <p className="text-slate-600 text-justify">
              Entiendo que cada cliente es único, y por eso me especializo en crear soluciones personalizadas que se adaptan a sus necesidades específicas. Su seguridad es mi prioridad, y trabajo incansablemente para estar a la altura de su confianza, especialmente cuando más me necesita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;