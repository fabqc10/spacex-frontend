type Astronaut = {
  id: string;
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  status: string;
};

type Launch = {
  flight_number: number;
  name: string;
  rocket: Rocket;
  launchDate: string;
  details: string;
  success: boolean;
  upcoming: boolean;
  links: {
    patch: {
      small: string;
      large: string;
    };
  };
  customers: {
    customers: string[];
    id: string;
  };
};

type Rocket = {
  id: string;
  name: string;
  type: string;
  company: string;
  country: string;
  description: string;
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  images: string[];
};
