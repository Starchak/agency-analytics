interface IDimensions {
  height: number;
  width: number;
}

interface ISharedWith {
  avatar: string;
  id: string;
  name: string;
}

interface IImage {
  createdAt: string;
  description: string;
  dimensions: IDimensions;
  favorited: boolean;
  filename: string;
  id: string;
  resolution: IDimensions;
  sharedWith: ISharedWith[];
  sizeInBytes: number;
  updatedAt: string;
  uploadedBy: string;
  url: string;
}
