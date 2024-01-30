/**
 * router/index.ts
 *
 * This file is used to register all routes
 * Documentation: https://router.vuejs.org/
 */
// Components
import Default from '@/layouts/default'
import Home from '@/views/Home'
import Result from '@/views/result'
import PrivacyPolocy from '@/views/privacyPolicy'
import Introduce from '@/views/introduce'
import Archive from '@/views/archive'
import News from '@/views/news'

import NotFound from '@/views/NotFound'

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: Default,
    redirect: '/home',

    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'result',
        name: 'Result',
        component: Result
      },
      {
        path: 'privacy-polocy',
        name: 'PrivacyPolocy',
        component: PrivacyPolocy
      },
      {
        path: 'introduce',
        name: 'introduce',
        component: Introduce,
        redirect: '/introduce/introduce',
        meta: {
          title: '소개'
        },
        children: [
          {
            path: 'introduce',
            name: 'Introduce',
            meta: {
              title: '재단소개'
            },
            component: () => import('@/views/introduce/introduce')
          },
          {
            path: 'ai-ethics',
            name: 'AiEthics',
            meta: {
              title: 'AI윤리'
            },
            component: () => import('@/views/introduce/aiEthics')
          }
        ]
      },
      {
        path: 'archive',
        name: '자료실',
        component: Archive,
        redirect: '/archive/thesis',
        meta: {
          title: 'Archive'
        },
        children: [
          {
            path: 'thesis',
            name: 'Thesis List',
            meta: {
              title: '논문 관리'
            },
            component: () => import('@/views/archive/thesis')
          },
          {
            path: 'report',
            name: 'Report List',
            meta: {
              title: '보고서 관리'
            },
            component: () => import('@/views/archive/report')
          },
          {
            path: 'article',
            name: 'Article List',
            meta: {
              title: '기사 관리'
            },
            component: () => import('@/views/archive/article')
          },
          {
            path: 'guideline',
            name: 'Guideline List',
            meta: {
              title: '가이드라인 관리'
            },
            component: () => import('@/views/archive/guideline')
          },
          {
            path: '/archive/refSite',
            name: 'ReferenceSite List',
            meta: {
              title: '참고사이트 관리'
            },
            component: () => import('@/views/archive/refSite/index')
          },
          {
            path: 'curriculum',
            name: 'Curriculum List',
            meta: {
              title: '교육커리큘럼 관리'
            },
            component: () => import('@/views/archive/curriculum')
          }
        ]
      },
      {
        path: 'news',
        name: 'News',
        component: News,
        redirect: '/news/notice',
        meta: {
          title: '소식'
        },
        children: [
          {
            path: 'notice',
            name: 'Notice',
            meta: {
              title: '공지사항'
            },
            component: () => import('@/views/news/notice')
          },
          {
            path: 'event',
            name: 'Event',
            meta: {
              title: '관련행사'
            },
            component: () => import('@/views/news/event')
          },
          {
            path: 'eventCalendar',
            name: 'Event Calendar',
            meta: {
              title: '행사캘린더'
            },
            component: () => import('@/views/news/eventCalendar')
          },
          {
            path: 'event-regist',
            name: 'Evenet Regist',
            meta: {
              title: '행사신청'
            },
            component: () => import('@/views/news/eventRegist')
          }
        ]
      },
      {
        path: 'suggest',
        name: 'suggest',
        component: () => import('@/views/suggest'),
        redirect: '/suggest/faq',
        meta: {
          title: '문의/제안'
        },
        children: [
          {
            path: 'faq',
            name: 'FAQ',
            meta: {
              title: 'FAQ'
            },
            component: () => import('@/views/suggest/faq')
          },
          {
            path: 'suggest',
            name: 'Suggest',
            meta: {
              title: '문의/제안'
            },
            component: () => import('@/views/suggest/suggest')
          }
        ]
      },
      { path: '/:path(.*)', component: NotFound }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
