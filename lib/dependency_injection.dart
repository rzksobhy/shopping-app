import 'package:get_it/get_it.dart';
import 'package:shopping_app/application/router.dart';

late final GetIt sl;

Future<void> initialDependencies() async {
  sl = GetIt.instance;

  // external services

  // services
  sl.registerSingleton<ApplicationRouter>(ApplicationRouter(sl));

  // repositories

  // usecases
}
