import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import TemplateForm from '../resources/templates/phoneTemplate'

import PPForm from '../resources/components/PPForm'

export default function Home() {
  return (
    <TemplateForm>
      <PPForm />
    </TemplateForm>
  )
}
