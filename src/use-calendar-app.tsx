import { useEffect, useState } from 'react'
import {
  CalendarApp,
  CalendarConfig,
  createCalendar,
} from 'schedule-x/packages/calendar/dist/core.js'
import { PluginBase } from 'schedule-x/packages/shared/dist/core.js'

export function useCalendarApp<Plugins extends PluginBase<string>[]>(
  config: CalendarConfig,
  plugins?: Plugins
) {
  const [calendarApp, setCalendarApp] = useState(() => createCalendar<Plugins>(config, plugins))

  useEffect(()=>{
    setCalendarApp(createCalendar<Plugins>(config, plugins))
  },[config?.locale])
  return calendarApp
}

export function useNextCalendarApp<Plugins extends PluginBase<string>[]>(
  config: CalendarConfig,
  plugins?: Plugins
) {
  const [calendarApp, setCalendarApp] = useState<CalendarApp>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCalendarApp(createCalendar<Plugins>(config, plugins))
    }
  }, [])

  return calendarApp
}
