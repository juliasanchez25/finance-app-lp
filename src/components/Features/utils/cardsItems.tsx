import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { faPaste } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

export const cardsItems = [
  {
    id: 1,
    title: 'Estabeleça Metas Financeiras',
    description: 'Defina metas de economia ou gastos mensais para alcançar seus objetivos financeiros de longo prazo.',
    icon: <><FontAwesomeIcon icon={faMoneyBillTrendUp} size='xl' /></>
  },
  {
    id: 2,
    title: 'Orçamento Personalizado',
    description: 'Crie orçamentos personalizados com base em suas necessidades e prioridades financeiras.',
    icon: <><FontAwesomeIcon icon={faMoneyCheckDollar} size='xl' /></>
  },
  {
    id: 3,
    title: 'Gerenciamento de Despesas',
    description: 'Registre e categorize suas despesas automaticamente. Analise seus gastos de forma eficiente.',
    icon: <><FontAwesomeIcon icon={faScaleBalanced} size='xl' /></>
  },
  {
    id: 4,
    title: 'Alertas de Gastos',
    description: 'Receba notificações  quando estiver se aproximando de seus limites de gastos em categorias específicas',
    icon: <><FontAwesomeIcon icon={faBell} size='xl' /></>
  },
  {
    id: 5,
    title: 'Planejamento de Poupança',
    description: 'Estabeleça objetivos de poupança e acompanhe seu progresso ao longo do tempo.',
    icon: <><FontAwesomeIcon icon={faPiggyBank} size='xl' /></>
  },
  {
    id: 6,
    title: 'Relatórios Detalhados',
    description: 'Acesse relatórios detalhados sobre seus hábitos de gastos e padrões financeiros.',
    icon: <><FontAwesomeIcon icon={faPaste} size='xl' /></>
  }
]