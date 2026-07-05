import { IconFileText, IconClipboardText, IconWriting, IconMessageCircle, IconCheck } from '@tabler/icons-react'

const iconByType = {
  materi: IconFileText,
  tugas: IconClipboardText,
  kuis: IconWriting,
  forum: IconMessageCircle,
}

function PertemuanContentList({ items, onItemClick }) {
  if (!items || items.length === 0) {
    return (
      <p className="text-sm text-gray-400 italic">
        Belum ada konten untuk pertemuan ini.
      </p>
    )
  }

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item) => {
        const Icon = iconByType[item.tipe] || IconFileText
        return (
          <div
            key={item.id}
            onClick={() => onItemClick && onItemClick(item)}
            className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded-lg"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center">
              <Icon size={16} className="text-navy" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{item.judul}</p>
              <p className="text-xs text-gray-400 capitalize">{item.tipe}</p>
            </div>
            <div className="flex-shrink-0">
              {item.selesai ? (
                <span className="flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2 py-1 rounded">
                  <IconCheck size={12} /> Done
                </span>
              ) : (
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  Belum
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PertemuanContentList