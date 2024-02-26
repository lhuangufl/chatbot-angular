import { Injectable } from '@angular/core';
import { Agent } from './hubAgent';
@Injectable({
  providedIn: 'root',
})
export class HubService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: Agent[] = [
    {
      id: 0,
      name: 'Business Pitch Deck',
      city: 'Generate slides for a business pitch deck PowerPoint presentation',
      state: 'Created by Tushar Kale',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'Quick Data Extractor',
      city: 'Extract actionable insights to make data-driven decisions',
      state: 'Created By Navdeep Navdeep',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Data Visualization Code',
      city: 'Graph and data visualizations made easy with code',
      state: 'Created By Tushar Kale',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Knowledge Mindmap',
      city: 'Flowchart to map out ideas from your text or articles',
      state: 'Created By Lin Huang',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Complex Equations to LaTeX',
      city: 'Turn any complex mathematical expression into LaTeX code to reason about it with your LLM',
      state: 'Created By Lin Huang',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Data Analysis',
      city: 'Read, analyze, visualize, and wrangle data',
      state: 'Created By Navdeep Navdeep',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Complex Equations to LaTeX',
      city: 'Generate slides for a business pitch deck PowerPoint presentation"',
      state: 'Created By Navdeep Navdeep',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'PPT Composer',
      city: 'Flowchart to map out ideas from your text or articles',
      state: 'Created By Navdeep Navdeep',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Data Analysis Report',
      city: 'Flowchart to map out ideas from your text or articles',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Flowchart to map out ideas from your text or articles',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  getAllHousingLocations(): Agent[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Agent | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
