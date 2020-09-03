import React from 'react'
import { BiEnvelope, BiPhone } from 'react-icons/bi'

import Logo from './Logo'
import StyledFooter from '../styles/StyledFooter'
import CopyrightText from '../styles/CopyrightText'
import Contact from '../styles/Contact'
import ContactList from '../styles/ContactList'
import ContactIcon from '../styles/ContactIcon'
import Container from './Container'

interface ContactListItemsProps {
  icon: React.ReactNode
  contact: string
}

const ContactListItems: React.FC<ContactListItemsProps> = ({ icon, contact }) => (
  <ContactList>
    <ContactIcon>{icon}</ContactIcon> {contact}
  </ContactList>
)

const Footer: React.FC = () => {
  const ContactLists: { icon: React.ReactNode; contact: string }[] = [
    { icon: <BiPhone />, contact: '+234 (0)801 234 5678' },
    { icon: <BiEnvelope />, contact: 'blog@example.com' }
  ]

  return (
    <StyledFooter>
      <Container className="container">
        <Logo />
        <CopyrightText>Copyrigt &copy; All Rights Reserved.</CopyrightText>
        <Contact>
          {ContactLists.map(({ icon, contact }) => (
            <ContactListItems key={contact} icon={icon} contact={contact} />
          ))}
        </Contact>
      </Container>
    </StyledFooter>
  )
}

export default Footer
