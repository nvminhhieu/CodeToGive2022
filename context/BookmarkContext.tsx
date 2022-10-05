import { createContext, ReactNode, useContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import IJob from "../types/job"

type BookmarkProviderProps = {
  children: ReactNode
}

type BookmarkContext = {
  addBookmarkedJobs: (inputJob: IJob) => void
  removeBookmarkedJobs: (inputJob: IJob) => void
  bookmarkedJobs: IJob[]
}

const BookmarkContext = createContext({} as BookmarkContext)

export function useBookmarkContext() {
  return useContext(BookmarkContext)
}

export function BookmarkProvider({ children }: BookmarkProviderProps) {
  const [bookmarkedJobs, setBookmarkedJobs] = useLocalStorage<IJob[]>(
    "bookmarked-jobs",
    []
  )

  const addBookmarkedJobs = (inputJob: IJob) => {
    const isNotFoundExistedJobInState = !bookmarkedJobs.find(
      (stateJob: IJob) => stateJob?.job_id === inputJob?.job_id
    )

    if (isNotFoundExistedJobInState) {
      setBookmarkedJobs([...bookmarkedJobs, inputJob])
    }
  }

  const removeBookmarkedJobs = (inputJob: IJob) => {
    console.log("stateBookmarked", bookmarkedJobs)
    console.log("inputJobInRemove", inputJob)
    const removedResult = bookmarkedJobs.filter(
      (stateJob: IJob) => stateJob?.job_id !== inputJob?.job_id
    )
    setBookmarkedJobs(removedResult)
  }

  return (
    <BookmarkContext.Provider
      value={{ addBookmarkedJobs, removeBookmarkedJobs, bookmarkedJobs }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}
