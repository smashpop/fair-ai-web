/**
 * plugins/global-components.ts
 *
 * This file is used to register all global components
 */

// Components
import Logo from '@/components/Logo'
import BaseCard from '@/components/ui/cards/BaseCard'

// Types
// import app from 'vue'

export default function (app) {
  app.component('Logo', Logo).component('BaseCard', BaseCard)
}
