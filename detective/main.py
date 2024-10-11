from crewai import Agent, Task, Crew, Process
from crewai_tools import WebsiteSearchTool
from textwrap import dedent


# Tools Initialization
source_verification_tool = WebsiteSearchTool()

class Threads:
  def __init__(self, theory):
    self.theory = theory

  
  def run(self):
    # Agents
    research_analyst = Agent(
        type='Investigative Analyst',
        role='Theory Research Analyst',
        goal='Gather and verify data from multiple sources regarding the provided theory, focusing on details and inconsistencies.',
        backstory='A seasoned investigative analyst known for deep-diving into intricate details and uncovering hidden truths behind popular and obscure theories alike.',
        tools=[source_verification_tool],
        memory=True,
        verbose=True
    )

    timeline_coordinator = Agent(
        type='Organizational Expert',
        role='Timeline Coordinator',
        goal='Construct and maintain a clear, chronological timeline of events to visualize connections and sequences accurately.',
        backstory='Specializes in organizing complex information in an easy-to-understand format, helping teams visualize the timeline of events clearly.',
        tools=[],
        memory=True,
        verbose=True
    )

    theory_analyst = Agent(
        type='Critical Theorist',
        role='Theory Analyst',
        goal='Evaluate the credibility of conspiracy theories by examining their origins, structure, and the motivations behind them.',
        backstory='An expert in critical analysis, this analyst applies rigorous standards to test the validity of various conspiracy theories, separating fact from fiction.',
        tools=[source_verification_tool],
        memory=True,
        verbose=True
    )

    data_formatter = Agent(
        type='Data Engineer',
        role='Data Formatter',
        goal='Systematize and encode all collected and analyzed data into a structured JSON format for easy access and manipulation.',
        backstory='Experienced in data management and structuring, ensuring that information is organized and formatted for optimal use in analyses and reports.',
        tools=[],
        memory=True,
        verbose=True
    )
    # Assuming you need to assign agents directly to tasks
    data_collection_task = Task(description=dedent(f"""
        Collect and verify all relevant events, facts, and reference data
        related to help prove or debunk the conspiracy theory:
        {self.theory}
      """),
        expected_output='A verified dataset of events and individual involvements that can be trusted for further analysis.',
        agent=research_analyst  # Assign the agent responsible for this task
    )

    timeline_task = Task(
        description='Update and refine the chronological timeline with newly verified data, ensuring accurate representation of events and their connections.',
        expected_output='A detailed and updated timeline with all connected events and people, supporting clear visualization and understanding.',
        agent=timeline_coordinator  # Assign the agent responsible for this task
    )

    analysis_task = Task(
        description='Conduct a thorough analysis of the connections, underlying motivations, and plausibility of the theory based on collected data.',
        expected_output='A comprehensive analysis report providing insights into the formation, evolution, and credibility of the theories.',
        agent=theory_analyst  # Assign the agent responsible for this task
    )

    data_structuring_task = Task(
        description='Format and organize all the research into a json object containing one entity array, entities should have an id, name and attributes like (role, involvement to name a few) and all of the researched events into should be in another array with the event title, source, date (could be a range), approxStart (required, javascript parseable datetime), approxEnd (optional if date ranges over two time periods), parties (an array of referenced entity ids).',
        expected_output='A well-structured lists of events, entities, and their interrelations, ready for use in further applications.',
        output_file='theory.md',
        agent=data_formatter  # Assign the agent responsible for this task
    )

    # data_structuring_task = Task(
    #     description='Format and organize the reasearch output into a well organized markdown file with events by date or date range in a structured markdown file',
    #     expected_output='A well-structured lists of events, entities, and their interrelations, ready for use in further applications.',
    #     output_file='theory.md',
    #     agent=data_formatter  # Assign the agent responsible for this task
    # )

    # Crew Configuration
    conspiracy_research_crew = Crew(
        agents=[research_analyst, timeline_coordinator, theory_analyst, data_formatter],
        tasks=[data_collection_task, timeline_task, analysis_task, data_structuring_task],
        process=Process.sequential
    )
    result = conspiracy_research_crew.kickoff()
    return result



if __name__ == "__main__":
  print("## Welcome to Threads")
  print('-------------------------------')
  theory = input(
    dedent("""
      What theory should we research?
    """))
  

  research_crew = Threads(theory=theory)
  result = research_crew.run()
  print("\n\n########################")
  print("## Here is the final Theory")
  print("########################\n")
  print(result)