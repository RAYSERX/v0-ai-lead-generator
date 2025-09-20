"use client"

import { useState } from "react"
import { ChatInterface } from "@/components/chat-interface"
import { SheetsTab } from "@/components/sheets-tab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomePage() {
  const [sheets, setSheets] = useState<any[]>([])

  const handleSheetsReceived = (newSheets: any[]) => {
    setSheets((prev) => [...prev, ...newSheets])
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="sheets">Sheets ({sheets.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="mt-4">
            <ChatInterface onSheetsReceived={handleSheetsReceived} />
          </TabsContent>

          <TabsContent value="sheets" className="mt-4">
            <SheetsTab sheets={sheets} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
