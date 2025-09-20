interface Sheet {
  id: string
  name: string
  data: any[]
  timestamp: Date
}

interface SheetsTabProps {
  sheets: any[]
}

export function SheetsTab({ sheets }: SheetsTabProps) {
  if (sheets.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="text-muted-foreground">
          <p className="text-lg font-medium mb-2">No sheets received yet</p>
          <p className="text-sm">Start chatting to generate lead sheets</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {sheets.map((sheet, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Sheet {index + 1}</h3>
            <span className="text-xs text-muted-foreground">{new Date().toLocaleString()}</span>
          </div>
          <div className="bg-muted rounded p-3">
            <pre className="text-sm overflow-auto">{JSON.stringify(sheet, null, 2)}</pre>
          </div>
        </div>
      ))}
    </div>
  )
}
