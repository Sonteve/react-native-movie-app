type RootStackParamList = {
  Home: undefined;
  Details: DetailsParam | undefined;
};

type DetailsParam = {
  itemId?: number;
  otherParam?: string;
};
