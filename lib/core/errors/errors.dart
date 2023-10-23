library error;

import 'package:equatable/equatable.dart';
import 'package:flutter/widgets.dart';

abstract class Failure extends Equatable implements Exception {
  final String? errorText;

  const Failure([this.errorText]);

  @override
  @mustCallSuper
  List get props => [errorText];
}
