export interface AnalyticsTrackPageProps {
  title: string
  path: string
}

export interface AnalyticsTrackClickProps {
  item: string
}

export interface AnalyticsTrackSearchProps {
  term: string
}

export interface Analytics {
  trackPage(props: AnalyticsTrackPageProps): void
  trackClick(props: AnalyticsTrackClickProps): void
  trackSearch(props: AnalyticsTrackSearchProps): void
}
