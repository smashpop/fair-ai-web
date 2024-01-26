/**
 * router/index.ts
 *
 * This file is used to register all routes
 * Documentation: https://router.vuejs.org/
 */
// Components
import NotFound from '@/views/NotFound'
import Default from '@/layouts/default/Default'
import Home from '@/views/Home'
import Introduce from '@/views/introduce/index'
import Archive from '@/views/archive/index'
import News from '@/views/news/index'

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Default,
    redirect: '/home',

    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/introduce',
        name: 'Introduce',
        component: Introduce,
        redirect: '/introduce/introduce',
        meta: {
          title: '소개'
        },
        children: [
          {
            path: '/introduce/introduce',
            name: 'Introduce',
            meta: {
              title: '재단소개'
            },
            component: () => import('@/views/introduce/Introduce')
          },
          {
            path: '/introduce/ai-ethics',
            name: 'AiEthics',
            meta: {
              title: 'AI윤리'
            },
            component: () => import('@/views/introduce/AiEthics')
          },
        ]
      },
      {
        path: '/archive',
        name: '자료실',
        component: Archive,
        redirect: '/archive/thesis',
        meta: {
          title: 'Archive'
        },
        children: [
          {
            path: '/archive/thesis',
            name: 'Thesis List',
            meta: {
              title: '논문 관리'
            },
            component: () => import('@/views/archive/Thesis')
          },
          {
            path: '/archive/report',
            name: 'Report List',
            meta: {
              title: '보고서 관리'
            },
            component: () => import('@/views/archive/Report')
          },
          {
            path: '/archive/article',
            name: 'Article List',
            meta: {
              title: '기사 관리'
            },
            component: () => import('@/views/archive/Article')
          },
          {
            path: '/archive/guideline',
            name: 'Guideline List',
            meta: {
              title: '가이드라인 관리'
            },
            component: () => import('@/views/archive/Guideline')
          },
          {
            path: '/archive/refSite',
            name: 'ReferenceSite List',
            meta: {
              title: '참고사이트 관리'
            },
            component: () => import('@/views/archive/refSite')
          },
          {
            path: '/archive/curriculum',
            name: 'Curriculum List',
            meta: {
              title: '교육커리큘럼 관리'
            },
            component: () => import('@/views/archive/Curriculum')
          }
        ]
      },
      {
        path: '/news',
        name: 'News',
        component: News,
        redirect: '/news/notice',
        meta: {
          title: '소식'
        },
        children: [
          {
            path: '/news/notice',
            name: 'Notice',
            meta: {
              title: '공지사항'
            },
            component: () => import('@/views/news/Notice')
          },
          {
            path: '/news/event',
            name: 'Event',
            meta: {
              title: '관련행사'
            },
            component: () => import('@/views/news/Event')
          },
          {
            path: '/news/eventCalendar',
            name: 'Event Calendar',
            meta: {
              title: '행사캘린더'
            },
            component: () => import('@/views/news/EventCalendar')
          },
          {
            path: '/news/eventRegist',
            name: 'Evenet Regist',
            meta: {
              title: '행사신청'
            },
            component: () => import('@/views/news/EventRegist')
          }
        ]
      },
      {
        path: '/suggest',
        name: 'Suggest',
        component: () => import('@/views/suggest/index')
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
