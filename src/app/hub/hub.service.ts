import { Injectable } from '@angular/core';
import { Agent } from './hubAgent';
@Injectable({
  providedIn: 'root',
})
export class HubService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected agentList: Agent[] = [
    {
      id: 0,
      name: 'Business Pitch Deck',
      description: 'Generate slides for a business pitch deck PowerPoint presentation',
      author: 'Created by Tushar Kale',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id: 1,
      name: 'Quick Data Extractor',
      description: 'Extract actionable insights to make data-driven decisions',
      author: 'Created By Navdeep Navdeep',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    },
    {
      id: 2,
      name: 'Data Visualization Code',
      description: 'Graph and data visualizations made easy with code',
      author: 'Created By Tushar Kale',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    },
    {
      id: 3,
      name: 'Knowledge Mindmap',
      description: 'Flowchart to map out ideas from your text or articles',
      author: 'Created By Lin Huang',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    },
    {
      id: 4,
      name: 'Complex Equations to LaTeX',
      description: 'Turn any complex mathematical expression into LaTeX code to reason about it with your LLM',
      author: 'Created By Lin Huang',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    },
    {
      id: 5,
      name: 'Data Analysis',
      description: 'Read, analyze, visualize, and wrangle data',
      author: 'Created By Navdeep Navdeep',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
    },
  ];

  getAllAgents(): Agent[] {
    return this.agentList;
  }

  // getHousingLocationById(id: number): Agent | undefined {
  //   return this.housingLocationList.find(
  //     (housingLocation) => housingLocation.id === id
  //   );
  // }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
