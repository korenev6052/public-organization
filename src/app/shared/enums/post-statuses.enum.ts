export enum PostStatuses {
  New,
  Done,
  Cancel
}

export const PostStatusesLabel = Object.freeze({
  [PostStatuses.New]: 'Надійшло',
  [PostStatuses.Done]: 'Виконано',
  [PostStatuses.Cancel]: 'Скасовано'
})

export const PostStatusesIcon = Object.freeze({
  [PostStatuses.New]: 'error',
  [PostStatuses.Done]: 'check_circle',
  [PostStatuses.Cancel]: 'remove_circle'
})

export const PostStatusesColor = Object.freeze({
  [PostStatuses.New]: '#FFD740',
  [PostStatuses.Done]: '#673AB7',
  [PostStatuses.Cancel]: '#F44336'
})