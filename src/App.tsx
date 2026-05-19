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
  Sparkles,
  BrainCircuit,
  MapPinned,
  CircleDollarSign,
  Clock3,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import logo from './assets/VectorDark.svg'

const sections = [['Cómo funciona', '#como-funciona'], ['Beneficios', '#beneficios'], ['Impacto', '#impacto'], ['FAQ', '#faq']]
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

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
          <a href="/" className='flex items-center'>
  <img src={logo} alt="Logo" className="h-8 w-auto" />
</a>
          <div className='hidden items-center gap-7 md:flex'>
            {sections.map(([n, h]) => <a key={n} href={h} className='text-sm text-[#2A3B2B] transition hover:text-[#4F7D00]'>{n}</a>)}
            <Button className='shadow-[0_8px_30px_-12px_rgba(79,125,0,.8)]'>Unirme ahora</Button>
          </div>
          <button className='text-[#2A3B2B] md:hidden' onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </nav>
        {open && <div className='border-t border-[#D7E5C7] bg-white/95 p-4 md:hidden'>{sections.map(([n, h]) => <a key={n} href={h} className='block py-2 text-[#2A3B2B]'>{n}</a>)}<Button className='mt-3 w-full'>Unirme ahora</Button></div>}
      </header>

      <main>
        <section className='container grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28'>
          <motion.div variants={container} initial='hidden' animate='show'>
            <motion.p variants={item} className='inline-flex items-center gap-2 rounded-full border border-[#D7E5C7] bg-white px-4 py-1 text-sm font-semibold text-[#4F7D00]'><Sparkles className='h-4 w-4' /> Marketplace + Logística + IA</motion.p>
            <motion.h1 variants={item} className='mt-6 text-5xl font-black leading-[1.02] tracking-tight md:text-6xl'>Digitaliza tu negocio local y <span className='text-[#4F7D00]'>vende más</span>.</motion.h1>
            <motion.p variants={item} className='mt-6 max-w-xl text-lg text-[#2D3D30]'>PÉEK conecta catálogo, entregas e inteligencia comercial en un solo ecosistema para pymes y comercios locales en México.</motion.p>
            <motion.div variants={item} className='mt-8 flex flex-wrap gap-3'>
              <Button size='lg'>Quiero escalar mi negocio <ArrowRight className='ml-2 h-4 w-4' /></Button>
              <Button variant='outline' size='lg'>Ver cómo funciona</Button>
            </motion.div>
            <motion.div variants={item} className='mt-8 grid max-w-xl grid-cols-3 gap-3'>
              {[["+3.5x", 'más pedidos'], ['24/7', 'operación conectada'], ['IA', 'recomendaciones']].map(([n, t]) => <Card key={String(t)} className='border-[#D7E5C7] bg-white/80 p-4 shadow-[0_10px_30px_-20px_rgba(11,29,11,.45)]'><p className='text-2xl font-bold text-[#163300]'>{String(n)}</p><p className='text-sm text-[#3B4B3D]'>{String(t)}</p></Card>)}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} className='overflow-hidden rounded-3xl border border-[#C2C9BC]'>
            <img
              src='https://http2.mlstatic.com/storage/pog-cm-admin/calm-assets/mujer-comerciante-sonriente-pymes--5b3fbd13.jpg'
              alt='Emprendedores y comerciantes locales en un mercado'
              className='h-full min-h-[420px] w-full object-cover'
            />
          </motion.div>
        </section>
        <section className='border-y border-[#D7E5C7] bg-gradient-to-b from-[#EFF5E5] to-[#F5F7F1] py-16'>
          <div className='container'>
            <h2 className='section-title'>El problema no es la falta de productos. Es la falta de conexión.</h2>
            <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
              {marketStats.map(([n, t]) => (
                <motion.div key={t} whileHover={{ y: -6 }}>
                  <Card className='h-full border-[#D7E5C7] bg-white/90 p-7 shadow-[0_20px_40px_-30px_rgba(22,51,0,.65)]'>
                    <p className='text-4xl font-bold text-[#163300]'>{n}</p>
                    <p className='mt-2 text-[#425443]'>{t}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id='como-funciona' className='bg-[#0B1D0B] py-20 text-white'>
          <div className='container'>
            <h2 className='section-title !text-white'>Conecta ventas, entregas e inteligencia en un solo lugar.</h2>
            <div className='mt-10 grid gap-6 md:grid-cols-3'>
              {solutionPillars.map(({ icon: Icon, title, text }) => (
                <motion.div key={title} whileHover={{ y: -4, scale: 1.01 }}>
                  <Card className='h-full border-[#365f22] bg-gradient-to-b from-white/10 to-white/5 p-6 text-white'>
                    <Icon className='text-[#A7D948]' />
                    <h3 className='mt-3 text-xl font-semibold'>{title}</h3>
                    <p className='mt-3 text-white/75'>{text}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id='beneficios' className='bg-white py-20'>
          <div className='container'>
            <h2 className='section-title'>Beneficios por perfil</h2>
            <div className='mt-10 grid gap-5 md:grid-cols-4'>
              {[['Productores', Users], ['Intermediarios', ShieldCheck], ['Repartidores', Truck], ['Consumidores', ShoppingBag]].map(([n, I]) => (
                <Card key={String(n)} className='group border-[#D7E5C7] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
                  <I className='text-[#4F7D00]' />
                  <h3 className='mt-3 font-semibold'>{String(n)}</h3>
                  <p className='mt-2 text-sm text-[#425443]'>Acceso a mercado, ingresos sostenibles y operación conectada dentro del mismo ecosistema.</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id='impacto' className='bg-[#EFF5E5] py-20'>
          <div className='container'>
            <h2 className='section-title'>Infraestructura para una nueva economía local.</h2>
            <div className='mt-10 grid gap-5 md:grid-cols-3'>
              <Card className='p-6'><Warehouse className='text-[#4F7D00]' /><h3 className='mt-3 font-semibold'>Impacto regional</h3><p className='mt-2 text-sm text-[#425443]'>Activamos economías locales al conectar capacidad productiva con demanda real en cada territorio.</p></Card>
              <Card className='p-6'><Store className='text-[#4F7D00]' /><h3 className='mt-3 font-semibold'>Impacto nacional</h3><p className='mt-2 text-sm text-[#425443]'>Fortalecemos la competitividad de micro y pequeñas empresas con infraestructura comercial continua.</p></Card>
              <Card className='p-6'><Globe className='text-[#4F7D00]' /><h3 className='mt-3 font-semibold'>Proyección internacional</h3><p className='mt-2 text-sm text-[#425443]'>Modelo replicable para mercados fragmentados en América Latina y otras economías emergentes.</p></Card>
            </div>
            <Card className='mt-7 border-[#CFE0BB] bg-white/80 p-6'>
              <p className='flex flex-wrap items-center justify-center gap-2 text-center font-medium text-[#1f3d11]'><Store className='h-4 w-4' /> Productor <ArrowRight className='h-4 w-4' /> <ShieldCheck className='h-4 w-4' /> Intermediario <ArrowRight className='h-4 w-4' /> <Package className='h-4 w-4' /> Marketplace <ArrowRight className='h-4 w-4' /> <Truck className='h-4 w-4' /> Entrega <ArrowRight className='h-4 w-4' /> <ShoppingBag className='h-4 w-4' /> Consumidor</p>
            </Card>
          </div>
        </section>

        <section id='faq' className='container py-20'>
          <h2 className='section-title'>Preguntas frecuentes</h2>
          <Accordion type='single' collapsible className='mt-8 w-full rounded-2xl border border-[#D7E5C7] bg-white/90 px-6'>
            {faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </section>
      </main>

      <footer className='border-t border-[#D7E5C7] bg-[#0B1D0B] py-10 text-white'>
        <div className='container flex flex-col justify-between gap-4 md:flex-row'>
          <p>© 2026 PÉEK Local. Todos los derechos reservados.</p>
          <div className='flex gap-6 text-sm'><a href='#' className='text-white/70 hover:text-[#A7D948]'>Privacidad</a><a href='#' className='text-white/70 hover:text-[#A7D948]'>Términos</a><a href='#' className='text-white/70 hover:text-[#A7D948]'>Contacto</a></div>
        </div>
      </footer>
    </div>
  )
}
