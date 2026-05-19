import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Menu,
  X,
  Store,
  Truck,
  ArrowRight,
  ShieldCheck,
  Warehouse,
  ChartNoAxesColumn,
  WifiOff,
  Link2Off,
  Globe,
  Users,
  ShoppingBag,
  Package,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }
const sections = [['Cómo funciona', '#como-funciona'], ['Beneficios', '#beneficios'], ['Impacto', '#impacto'], ['FAQ', '#faq']]

const marketStats = [
  ['99%+', 'de las unidades económicas en México son micro y pequeñas empresas'],
  ['52%', 'del PIB nacional proviene de este sector'],
  ['19%', 'de micro negocios cuentan con computadoras'],
  ['4 millones', 'de unidades económicas operan con acceso limitado al comercio digital'],
]

const problemPoints = [
  { icon: Link2Off, title: 'Oferta invisible', text: 'Productos que existen, pero no logran entrar en los canales de compra modernos.' },
  { icon: WifiOff, title: 'Digitalización inaccesible', text: 'Miles de negocios siguen fuera del mercado digital por falta de infraestructura.' },
  { icon: Truck, title: 'Distribución fragmentada', text: 'La logística local opera sin integración estable entre oferta, venta y entrega.' },
  { icon: ChartNoAxesColumn, title: 'Crecimiento limitado', text: 'Sin acceso comercial continuo, el potencial productivo se queda estancado.' },
]

const solutionPillars = [
  { icon: Store, title: 'Socios Productores', text: 'Negocios y productores locales que generan oferta real en cada región.' },
  { icon: ShieldCheck, title: 'Socios Intermediarios', text: 'Operadores comerciales validados que digitalizan catálogo, venden y desarrollan mercado.' },
  { icon: Truck, title: 'Socios Repartidores', text: 'Aliados logísticos que ejecutan última milla y sostienen la experiencia de entrega.' },
]

const faqs = [
  ['¿Qué es Péek?', 'Péek es una infraestructura B2B2C que conecta producción local con mercado digital y logística real.'],
  ['¿Necesito digitalizar mi negocio?', 'No. Puedes integrarte mediante Socios Intermediarios que operan la capa digital por ti.'],
  ['¿Qué hace un socio intermediario?', 'Incorpora negocios, estructura catálogos, comercializa oferta local y gestiona trazabilidad.'],
  ['¿Cómo funciona la logística?', 'La red de Socios Repartidores coordina entregas de última milla con seguimiento operativo.'],
  ['¿Quién puede unirse?', 'Productores, comercios locales, operadores comerciales y aliados logísticos con enfoque territorial.'],
  ['¿Cómo validan negocios?', 'Con evaluación documental, verificación operativa y seguimiento de reputación comercial.'],
]

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className='min-h-screen bg-[#F9FAF3] text-[#1A1C18]'>
      <header className='sticky top-0 z-50 border-b border-[#C2C9BC] bg-[#F9FAF3]/95 backdrop-blur'>
        <nav className='container flex h-16 items-center justify-between'>
          <a href='#' className='text-xl font-bold text-[#1A1C18]'>Péek <span className='text-[#4F7302]'>Local</span></a>
          <div className='hidden items-center gap-7 md:flex'>
            {sections.map(([n, h]) => <a key={n} href={h} className='text-sm text-[#42493F] hover:text-[#4F7302]'>{n}</a>)}
            <Button>Unirme ahora</Button>
          </div>
          <button className='text-[#42493F] md:hidden' onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </nav>
        {open && <div className='border-t border-[#C2C9BC] bg-white p-4 md:hidden'>{sections.map(([n, h]) => <a key={n} href={h} className='block py-2 text-[#42493F]'>{n}</a>)}<Button className='mt-3 w-full'>Unirme ahora</Button></div>}
      </header>

      <main>
        <section className='container grid gap-10 py-20 md:grid-cols-2 md:py-28'>
          <motion.div variants={fade} initial='hidden' animate='show'>
            <p className='text-sm font-semibold text-[#4F7302]'>Impulsando el comercio local desde México.</p>
            <h1 className='mt-4 text-5xl font-bold leading-tight'>Miles de productos existen. Muy pocos logran llegar a quien los necesita.</h1>
            <p className='mt-5 text-lg text-[#42493F]'>Péek conecta productores locales, socios intermediarios, repartidores y consumidores en un ecosistema que convierte oferta invisible en oportunidades reales.</p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <Button size='lg'>Unirme ahora</Button>
              <Button variant='outline' size='lg'>Cómo funciona</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} className='overflow-hidden rounded-3xl border border-[#C2C9BC]'>
            <img
              src='https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1400&q=80'
              alt='Emprendedores y comerciantes locales en un mercado'
              className='h-full min-h-[420px] w-full object-cover'
            />
          </motion.div>
        </section>

        <section className='border-y border-[#C2C9BC] bg-[#F3F4ED] py-16'>
          <div className='container'>
            <h2 className='section-title'>El problema no es la falta de productos. Es la falta de conexión.</h2>
            <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
              {marketStats.map(([n, t]) => (
                <Card key={t} className='p-7'>
                  <p className='text-4xl font-bold text-[#022601]'>{n}</p>
                  <p className='mt-2 text-[#42493F]'>{t}</p>
                </Card>
              ))}
            </div>
            <p className='mt-8 max-w-4xl text-[#42493F]'>México tiene una capacidad productiva enorme, pero la infraestructura fragmentada impide que millones de negocios locales lleguen de forma competitiva al mercado moderno.</p>
          </div>
        </section>

        <section className='container py-20'>
          <div className='grid gap-10 md:grid-cols-2 md:items-start'>
            <div>
              <h2 className='section-title text-left'>Donde el sistema se rompe, la economía local se vuelve invisible.</h2>
              <p className='mt-4 text-[#42493F]'>El reto no es producir más, es conectar mejor. Estas son las barreras estructurales que Péek atiende en campo y en mercado.</p>
            </div>
            <div className='grid gap-4'>
              {problemPoints.map(({ icon: Icon, title, text }) => (
                <Card key={title} className='p-6'>
                  <Icon className='mb-4 text-[#799833]' />
                  <h3 className='font-semibold'>{title}</h3>
                  <p className='mt-2 text-sm text-[#42493F]'>{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id='como-funciona' className='bg-[#022601] py-20 text-white'>
          <div className='container'>
            <h2 className='section-title !text-white'>No obligamos a los negocios a digitalizarse. Creamos infraestructura para incluirlos.</h2>
            <p className='mx-auto mt-4 max-w-4xl text-center text-white/70'>Péek opera como un ecosistema B2B2C: integra oferta local, operación comercial y logística en una sola cadena de acceso a mercado.</p>
            <div className='mt-10 grid gap-6 md:grid-cols-3'>
              {solutionPillars.map(({ icon: Icon, title, text }) => (
                <Card key={title} className='border-white/20 bg-white/10 p-6 text-white'>
                  <Icon className='text-[#D6D979]' />
                  <h3 className='mt-3 text-xl font-semibold'>{title}</h3>
                  <p className='mt-3 text-white/70'>{text}</p>
                </Card>
              ))}
            </div>
            <Card className='mt-8 border-white/20 bg-white/5 p-7 text-white'>
              <h3 className='text-xl font-semibold'>Capa SaaS empresarial para escalar la operación</h3>
              <p className='mt-3 text-white/70'>Sobre esta red, Péek habilita gestión comercial, catálogo, trazabilidad de pedidos y coordinación operativa para que el crecimiento local sea medible y sostenible.</p>
            </Card>
          </div>
        </section>

        <section id='beneficios' className='bg-white py-20'>
          <div className='container'>
            <h2 className='section-title'>Beneficios por perfil</h2>
            <div className='mt-10 grid gap-5 md:grid-cols-4'>
              {[["Productores", Users], ['Intermediarios', ShieldCheck], ['Repartidores', Truck], ['Consumidores', ShoppingBag]].map(([n, I]) => <Card key={String(n)} className='p-6'><I className='text-[#799833]' /><h3 className='mt-3 font-semibold'>{String(n)}</h3><p className='mt-2 text-sm text-[#42493F]'>Acceso a mercado, ingresos sostenibles y operación conectada dentro del mismo ecosistema.</p></Card>)}
            </div>
          </div>
        </section>

        <section id='impacto' className='bg-[#F3F4ED] py-20'>
          <div className='container'>
            <h2 className='section-title'>Más que una app. Infraestructura para una nueva economía local.</h2>
            <div className='mt-10 grid gap-5 md:grid-cols-3'>
              <Card className='p-6'><Warehouse className='text-[#799833]' /><h3 className='mt-3 font-semibold'>Impacto regional</h3><p className='mt-2 text-sm text-[#42493F]'>Activamos economías locales al conectar capacidad productiva con demanda real en cada territorio.</p></Card>
              <Card className='p-6'><Store className='text-[#799833]' /><h3 className='mt-3 font-semibold'>Impacto nacional</h3><p className='mt-2 text-sm text-[#42493F]'>Fortalecemos la competitividad de micro y pequeñas empresas con infraestructura comercial continua.</p></Card>
              <Card className='p-6'><Globe className='text-[#799833]' /><h3 className='mt-3 font-semibold'>Proyección internacional</h3><p className='mt-2 text-sm text-[#42493F]'>Modelo replicable para mercados fragmentados en América Latina y otras economías emergentes.</p></Card>
            </div>
            <Card className='mt-7 p-6'>
              <p className='flex flex-wrap items-center justify-center gap-2 text-center font-medium text-[#3E5902]'><Store className='h-4 w-4' /> Productor <ArrowRight className='h-4 w-4' /> <ShieldCheck className='h-4 w-4' /> Intermediario <ArrowRight className='h-4 w-4' /> <Package className='h-4 w-4' /> Marketplace <ArrowRight className='h-4 w-4' /> <Truck className='h-4 w-4' /> Entrega <ArrowRight className='h-4 w-4' /> <ShoppingBag className='h-4 w-4' /> Consumidor</p>
            </Card>
          </div>
        </section>

        <section id='faq' className='container py-20'>
          <h2 className='section-title'>Preguntas frecuentes</h2>
          <Accordion type='single' collapsible className='mt-8 w-full rounded-2xl border border-[#C2C9BC] bg-white px-6'>
            {faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </section>

        <section className='container pb-24'>
          <Card className='bg-[#D6D979] p-10 text-center text-[#022601]'>
            <h2 className='text-3xl font-bold'>Construyamos la infraestructura del comercio local que falta.</h2>
            <p className='mt-3 text-[#3E5902]'>Súmate al ecosistema Péek y conecta capacidad productiva con oportunidades reales.</p>
            <Button variant='outline' size='lg' className='mt-6 border-[#4F7302] bg-[#4F7302] text-white hover:border-[#3E5902] hover:bg-[#3E5902]'>Unirme ahora <ArrowRight className='ml-2 h-4 w-4' /></Button>
          </Card>
        </section>
      </main>

      <footer className='border-t border-[#C2C9BC] bg-[#022601] py-10 text-white'>
        <div className='container flex flex-col justify-between gap-4 md:flex-row'>
          <p>© 2026 Péek Local. Todos los derechos reservados.</p>
          <div className='flex gap-6 text-sm'><a href='#' className='text-white/70 hover:text-[#A7D298]'>Privacidad</a><a href='#' className='text-white/70 hover:text-[#A7D298]'>Términos</a><a href='#' className='text-white/70 hover:text-[#A7D298]'>Contacto</a></div>
        </div>
      </footer>
    </div>
  )
}
