import {Injectable} from '@angular/core';
import {Select2OptionData} from '../../select2/select2.interface';

@Injectable()
export class DataService {
    getSimpleList(): Select2OptionData[] {
        return [
            {
                id: 'val1',
                text: 'Value 1',
                additional: {
                    image: 'app/shared/images/city-q-c-50-50-2.jpg',
                    winner: '4'
                }
            },
            {
                id: 'val2',
                text: 'Value 2',
                additional: {
                    winner: '3'
                }
            },
            {
                id: 'val3',
                text: 'Value 3',
                additional: {
                    image: 'app/shared/images/city-q-c-50-50-4.jpg',
                    winner: '1'
                }
            },
            {
                id: 'val4',
                text: 'Value 4',
                additional: {
                    image: 'app/shared/images/city-q-c-50-50-6.jpg',
                    winner: '5'
                }
            },
            {
                id: 'val5',
                text: 'Value 5',
                additional: {
                    image: 'app/shared/images/city-q-c-50-50-8.jpg',
                    winner: '2'
                }
            }
        ];
    }

    getComplexList(): Select2OptionData[] {
        return [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1'
                    },
                    {
                        id: 'car2',
                        text: 'Car 2'
                    },
                    {
                        id: 'car3',
                        text: 'Car 3'
                    }
                ]
            },
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1'
                    },
                    {
                        id: 'plane2',
                        text: 'Plane 2'
                    },
                    {
                        id: 'plane3',
                        text: 'Plane 3'
                    }
                ]
            }
        ];
    }
}
