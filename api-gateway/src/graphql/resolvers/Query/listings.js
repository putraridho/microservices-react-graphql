import ListingsService from "#root/adapters/ListingsService";

const listingResolver = async () => {
  return await ListingsService.fetchAllListings();
};

export default listingResolver;
