'use client'

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeaderCell,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
  DateInput,
  DateInputGroup,
  DatePicker,
  DatePickerContent,
  DateSegment,
  IconButton,
  Label,
} from '@/../../packages/ui/src'
import { allDocs } from 'contentlayer/generated'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>
        <span className="text-lg font-medium">Links</span>
      </div>
      <DatePicker>
        <Label>Date</Label>
        <DateInputGroup className="pr-1">
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <IconButton size="sm" variant="subtle" className="ml-auto shrink-0">
            <ChevronDown size="16" strokeWidth="3" />
          </IconButton>
        </DateInputGroup>
        <DatePickerContent>
          <Calendar>
            <CalendarHeader>
              <CalendarPrevButton />
              <CalendarHeading />
              <CalendarNextButton />
            </CalendarHeader>
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </DatePickerContent>
      </DatePicker>
      <ul>
        {allDocs.map((doc, idx) => (
          <li key={idx}>
            <Link className="text-blue-500 underline" href={doc.slug}>
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
