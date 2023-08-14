import '@/setup';

class App {
  public static start() {
    const d = new Date();
    console.log(nx.$args, nx.$conf.gets());
    console.log('hello app: 🥬', nx.VERSION, d.foramt('datetime'));
  }
}

App.start();
