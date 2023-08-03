export function Box({ percent, label }) {
  return (
    <div className='border rounded-sm p-4 border-slate-200 dark:border-slate-800'>
      <strong>{percent}%</strong>&nbsp;{label}
    </div>
  )
}
