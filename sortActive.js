const sortByStatus = ({ data }) => {
    return data.sort((a, b) => {
      const statusPriority = (status) => {
        return status === "DELETED" ? 1 : 2; // DELETED has higher priority than ACTIVE
      };
  
      return statusPriority(a.status) - statusPriority(b.status);
    });
  };

// export const sortByStatus = <Type>({ data }: { data: Type[] }): Type[] => {
//     return data.sort((a: any, b: any) => {
//       const statusPriority = (status: string): number => {
//         return status === "DELETED" ? 1 : 2; // DELETED has higher priority than ACTIVE
//       };
  
//       return statusPriority(a.status) - statusPriority(b.status);
//     });
//   };
  


export const mockEnterPriceClients = [
    {
        id: "client-1",
        name: "Client 1",
        logoUrl: "/path/to/logo-client1.png",
        avatar: "/path/to/avatar-client1.png",
        sectorSlug: "retail",
        sectorName: "Retail",
        status: "ACTIVE",
        users: [
            {
                fullName: "Bob Johnson",
                email: "bob@client1.com",
                phone: "555-666-7777",
            },
        ],
    },
    {
        id: "client-5",
        name: "Client Five",
        logoUrl: "/path/to/logo-client5.png",
        avatar: "/path/to/avatar-client5.png",
        status: "DELETED",
        sectorSlug: "construction",
        sectorName: "Construction",
        users: [
            {
                fullName: "Eve Thompson",
                email: "eve@client5.com",
                phone: "888-999-0010",
            },
        ],
    },
    {
        id: "client-2",
        name: "Client 2",
        logoUrl: "/path/to/logo-client2.png",
        avatar: "/path/to/avatar-client2.png",
        sectorSlug: "construction",
        sectorName: "Construction",
        status: "ACTIVE",
        users: [
            {
                fullName: "Eve Thompson",
                email: "eve@client2.com",
                phone: "888-999-0000",
            },
        ],
    },
    {
        id: "client-4",
        name: "Client Four",
        logoUrl: "/path/to/logo-client4.png",
        avatar: "/path/to/avatar-client4.png",
        status: "DELETED",
        sectorSlug: "construction",
        sectorName: "Construction",
        users: [
            {
                fullName: "Eves Thompson",
                email: "eve@client4.com",
                phone: "888-999-0010",
            },
        ],
    },
    {
        id: "client-6",
        name: "Client Six",
        logoUrl: "/path/to/logo-client6.png",
        avatar: "/path/to/avatar-client6.png",
        sectorSlug: "healthcare",
        sectorName: "Healthcare",
        status: "ACTIVE",
        users: [
            {
                fullName: "Alice Cooper",
                email: "alice@client6.com",
                phone: "111-222-3333",
            },
        ],
    },
    {
        id: "client-7",
        name: "Client Seven",
        logoUrl: "/path/to/logo-client7.png",
        avatar: "/path/to/avatar-client7.png",
        sectorSlug: "finance",
        sectorName: "Finance",
        status: "DELETED",
        users: [
            {
                fullName: "Dave Rogers",
                email: "dave@client7.com",
                phone: "444-555-6666",
            },
        ],
    },
    {
        id: "client-8",
        name: "Client Eight",
        logoUrl: "/path/to/logo-client8.png",
        avatar: "/path/to/avatar-client8.png",
        sectorSlug: "technology",
        sectorName: "Technology",
        status: "ACTIVE",
        users: [
            {
                fullName: "Grace Hopper",
                email: "grace@client8.com",
                phone: "123-456-7890",
            },
        ],
    },
    {
        id: "client-10",
        name: "Client Ten",
        logoUrl: "/path/to/logo-client10.png",
        avatar: "/path/to/avatar-client10.png",
        sectorSlug: "manufacturing",
        sectorName: "Manufacturing",
        status: "ACTIVE",
        users: [
            {
                fullName: "Lisa White",
                email: "lisa@client10.com",
                phone: "333-222-1111",
            },
        ],
    },
];


const shuffledMockData = mockEnterPriceClients.sort(() => Math.random() - 0.5); // Shuffle


const sortedClients = sortByStatus({ data: shuffledMockData });

console.log("Sorted Clients:", JSON.stringify(sortedClients, null, 2));
