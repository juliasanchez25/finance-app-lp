import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'

export const advantagesItems = [
  {
    title: 'Organização e Simplicidade',
    description: 'Crie categorias para suas receitas e despesas, facilitando a organização. Acesse relatórios e gráficos intuitivos para visualizar sua situação financeira.',
    icon: <><FontAwesomeIcon icon={faListCheck} size='xl' /></>
  },
  {
    title: 'Segurança e Confidencialidade',
    description: 'Proteja seus dados com criptografia de alto nível.',
    icon: <><FontAwesomeIcon icon={faShieldHalved} size='xl' /></>
  },
  {
    title: 'Controle Total',
    description: 'Tenha uma visão completa de suas finanças em um só lugar. Monitore seus investimentos e acompanhe seu crescimento.',
    icon: <><FontAwesomeIcon icon={faSquareArrowUpRight} size='xl' /></>
  },
  {
    title: 'Suporte e Ajuda',
    description: 'Tenha a certeza de que você não está sozinho: Entre em contato com o suporte ao cliente para obter ajuda personalizada.',
    icon: <><FontAwesomeIcon icon={faQuestion} size='xl' /></>
  }
]