import { IconCheck } from '@tabler/icons-react'

function PertemuanQuickNav({ pertemuanList, activeId, onSelect }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden max-w-xs">
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-xs font-medium text-gray-400 tracking-wide">
          DAFTAR PERTEMUAN
        </span>
      </div>
      <div>
        {pertemuanList.map((item) => {
          const isActive = item.id === activeId
          return (
            <div
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`flex items-center gap-3 px-4 py-2.5 border-b border-gray-100 cursor-pointer ${
                isActive ? 'bg-navy/5 border-l-2 border-l-orange' : ''
              }`}
            >
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  isActive ? 'bg-navy text-white' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {item.nomor}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm truncate ${
                    isActive ? 'font-medium text-gray-900' : 'text-gray-700'
                  }`}
                >
                  Pertemuan {item.nomor} - {item.judul}
                </p>
                {item.tag && (
                  <span className="inline-block mt-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded bg-orange/15 text-orange">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="flex-shrink-0 w-4 h-4">
                {item.selesai ? (
                  <IconCheck size={16} className="text-success" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PertemuanQuickNav