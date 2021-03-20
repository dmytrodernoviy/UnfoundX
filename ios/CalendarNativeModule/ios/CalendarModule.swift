//
//  File.swift
//  UnfoundX
//
//  Created by Dmytro Dernovyi on 20.03.2021.
//

import Foundation

@objc(CalendarModule)
class CalendarModule: NSObject {

 @objc(createCalendarEvent:location:date:)
 func createCalendarEvent(_ name: String, location: String, date: NSNumber) -> Void {
   NSLog(location, date)
 }
}
