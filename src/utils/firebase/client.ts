/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need

import {
  Analytics as FAnalytics,
  getAnalytics,
  isSupported,
  logEvent
} from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { Analytics, AnalyticsTrackClickProps, AnalyticsTrackPageProps, AnalyticsTrackSearchProps } from './Analytics'

const app = initializeApp({
  apiKey: "AIzaSyCm4IqiTz9D0ixEyE0FEOnLsGG7O0BaiCA",
  authDomain: "programou-app.firebaseapp.com",
  projectId: "programou-app",
  storageBucket: "programou-app.appspot.com",
  messagingSenderId: "842195153338",
  appId: "1:842195153338:web:8446ae03076ba24e7aed83",
  measurementId: "G-0NR42161NW"
})

export class FirebaseAnalyticsAdapter implements Analytics {
  private analytics: FAnalytics | null

  constructor() {
    this.analytics = null
    isSupported().then(yes => {
      this.analytics = yes ? getAnalytics(app) : null
    })
  }

  trackClick(props: AnalyticsTrackClickProps): void {
    if (!this.analytics) throw new Error()
    logEvent(this.analytics, 'select_content', {
        item_id: props.item
    })
  }

  trackPage(props: AnalyticsTrackPageProps): void {
    if (!this.analytics) throw new Error()
    logEvent(this.analytics, 'page_view', {
        page_title: props.title,
        page_path: props.path
    })
  }

  trackSearch(props: AnalyticsTrackSearchProps): void {
    if (!this.analytics) throw new Error()
    logEvent(this.analytics, 'search', {
      search_term: props.term
    })
  }
}

export const analyticsClient = new FirebaseAnalyticsAdapter()
