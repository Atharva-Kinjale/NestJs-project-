import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  private locations=[
    {
      "pincode": 100001,
      "city": "New Delhi",
      "state": "Delhi",
      "country": "India"
    },
    {
      "pincode": 200001,
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "pincode": 300001,
      "city": "Kolkata",
      "state": "West Bengal",
      "country": "India"
    },
    {
      "pincode": 400001,
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    },
    {
      "pincode": 500001,
      "city": "Hyderabad",
      "state": "Telangana",
      "country": "India"
    }
  ]
  
  create(createLocationDto: CreateLocationDto) {
    return 'This action adds a new location';
  }

  findAll() {
    // return `This action returns all location`;
    return this.locations
  }

  findOne(id: number) {
    const location = this.locations.find(loc => loc.pincode=== id)
    // return `This action returns a #${id} location`;
    return location
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
