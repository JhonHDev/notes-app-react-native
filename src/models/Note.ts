export interface Note {
  id: string;
  title: string;
  description: string;
  isImportant?: boolean;
  createdAt: string;
  updatedAt: string;
  isDeleted?: boolean;
}
