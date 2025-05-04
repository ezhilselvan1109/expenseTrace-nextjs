import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Recent Transactions
                </h3>
            </div>

            <div className="flex items-center gap-3">
                <Link
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                    href="/transactions"
                >
                    See all
                </Link>
            </div>
        </div>
    )
}