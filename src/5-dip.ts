interface VideoRepository {
  save(video: object): void;
}

interface DomainEventPublisher {
  publish(name: string, content: object): void;
}

class VideoCreator {
  private readonly repository: VideoRepository;
  private readonly publisher: DomainEventPublisher;

  constructor(repository: VideoRepository, publisher: DomainEventPublisher) {
    this.repository = repository;
    this.publisher = publisher;
  }

  public create(video: object) {
    this.repository.save(video);
    this.publisher.publish("video created", video);
  }
}
